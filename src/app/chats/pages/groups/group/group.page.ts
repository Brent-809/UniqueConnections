import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { ChatService } from "../../../chat.service";
import { IonContent, ModalController } from "@ionic/angular";
import { SocketService } from "src/app/shared/services/socket.service";
import { DeleteConfirmationComponent } from "src/app/shared/components/delete-confirmation/delete-confirmation.component";
import { ChatsApiService } from "../../../chats-api.service";
import { ApiService } from "src/app/api.service";

@Component({
  selector: "app-group",
  templateUrl: "./group.page.html",
  styleUrls: ["./group.page.scss"],
})
export class GroupPage implements OnInit {
  @ViewChild(IonContent) content!: IonContent;
  messageForm!: FormGroup;
  messages: any[] = [];
  name!: string;
  img!: string;
  desc!: string;
  groupId!: string;
  currentUser: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ChatsApiService,
    private mainApiService: ApiService,
    private chatService: ChatService,
    private socketService: SocketService,
    private modalController: ModalController
  ) {
    this.initMessageForm();
  }

  ngOnInit(): void {
    this.fetchCurrentUserDetails();
    this.fetchGroupDetails();
    this.fetchInitialMessages();
    this.socketService.onMessageReceived((message: string) => { });
  }

  initMessageForm(): void {
    this.messageForm = this.fb.group({
      message: [null],
    });
  }

  async fetchCurrentUserDetails(): Promise<void> {
    const userId = this.apiService.getUserIdFromToken();
    if (userId) {
      try {
        const userDetails = await this.apiService
          .getUserById(userId)
          .toPromise();
        if (userDetails) {
          this.currentUser = userDetails;
        }
      } catch (error) {
        console.error("Error retrieving user details:", error);
      }
    } else {
      console.error("User ID not found in token");
    }
  }

  getMessageContentClass(sender: string): string {
    if (this.currentUser && this.currentUser.profileImg) {
      return sender === this.currentUser.profileImg
        ? "bg-blue-100"
        : "bg-white";
    }
    return "default-class";
  }

  fetchGroupDetails(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const groupId = params.get("id");
          if (groupId) {
            this.groupId = groupId;
            return this.apiService.getGroupById(groupId);
          } else {
            console.error("Invalid group ID");
            return [];
          }
        })
      )
      .subscribe(
        (response: any) => {
          if (
            response &&
            response._id &&
            response.name &&
            response.description &&
            response.image
          ) {
            this.name = response.name;
            this.img = response.image;
            this.desc = response.description;
          } else {
            console.error("Group details not found");
          }
          this.chatService.joinGroup(this.groupId);
          this.listenForMessages();
        },
        (error: any) => {
          console.error("Error retrieving group details:", error);
        }
      );
  }

  submitMessage(): void {
    const messageControl = this.messageForm.get("message");
    if (
      messageControl &&
      messageControl.value &&
      messageControl.value.trim() !== ""
    ) {
      this.socketService.sendMessage(messageControl.value);
      this.apiService
        .sendMessage(
          { message: messageControl.value, sender: this.currentUser.profileImg, groupId: this.groupId })
        .subscribe(
          () => {
            this.mainApiService.sendMessageNotification(
              messageControl.value,
              this.currentUser.profileImg
            );
            this.messageForm.reset();
            this.scrollToBottom();
          },
          (error) => {
            console.error("Error sending message:", error);
          }
        );
    }
  }

  listenForMessages(): void {
    this.chatService.getNewMessage().subscribe((message) => {
      if (message.groupId === this.groupId) {
        this.messages.push(message);
        this.scrollToBottom();
      }
    });
  }

  fetchInitialMessages(): void {
    this.apiService.getGroupMessages(this.groupId).subscribe(
      (messages) => {
        this.messages = messages;
        this.scrollToBottom();
      },
      (error) => {
        console.error("Error fetching initial messages:", error);
      }
    );
  }

  scrollToBottom(): void {
    this.content.scrollToBottom();
  }

  groupInfo() {
    this.router.navigateByUrl("/group-info/" + this.groupId);
  }

  async openChatPopup(message: any) {
    const modal = await this.modalController.create({
      component: DeleteConfirmationComponent,
      componentProps: {
        message: message, // Pass the clicked message to the popup component
      },
    });

    return await modal.present();
  }

  Leave() { }
}
