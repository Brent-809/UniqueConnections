import { __decorate } from "tslib";
import { Component, ViewChild } from "@angular/core";
import { IonContent } from "@ionic/angular";
import { switchMap } from "rxjs";
import { DeleteConfirmationComponent } from "../../../../shared/components/delete-confirmation/delete-confirmation.component";
let ChatPage = class ChatPage {
    constructor(fb, route, router, apiService, mainApiService, chatService, socketService, modalController) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.apiService = apiService;
        this.mainApiService = mainApiService;
        this.chatService = chatService;
        this.socketService = socketService;
        this.modalController = modalController;
        this.messages = [];
        this.initMessageForm();
    }
    ngOnInit() {
        this.fetchCurrentUserDetails();
        this.fetchUserDetails();
        this.fetchInitialMessages();
        this.socketService.onMessageReceived((message) => { });
    }
    initMessageForm() {
        this.messageForm = this.fb.group({
            message: [null],
        });
    }
    async fetchCurrentUserDetails() {
        const userId = this.apiService.getUserIdFromToken();
        if (userId) {
            try {
                const userDetails = await this.apiService
                    .getUserById(userId)
                    .toPromise();
                if (userDetails) {
                    this.currentUser = userDetails;
                }
            }
            catch (error) {
                console.error("Error retrieving user details:", error);
            }
        }
        else {
            console.error("User ID not found in token");
        }
    }
    getMessageContentClass(sender) {
        if (this.currentUser && this.currentUser.profileImg) {
            return sender === this.currentUser.profileImg
                ? "bg-blue-100"
                : "bg-white";
        }
        return "default-class";
    }
    fetchUserDetails() {
        this.route.paramMap
            .pipe(switchMap((params) => {
            const groupId = params.get("id");
            if (groupId) {
                this.groupId = groupId;
                return this.apiService.getUserById(groupId);
            }
            else {
                console.error("Invalid user ID");
                return [];
            }
        }))
            .subscribe((response) => {
            if (response &&
                response._id &&
                response.name &&
                response.username &&
                response.profileImg) {
                this.friendUserId = response._id;
                this.name = response.name;
                this.img = response.profileImg;
                this.uName = response.username;
            }
            else {
                console.error("Group details not found");
            }
            this.chatService.joinGroup(this.groupId);
            this.listenForMessages();
        }, (error) => {
            console.error("Error retrieving group details:", error);
        });
    }
    submitMessage() {
        const messageControl = this.messageForm.get("message");
        if (messageControl &&
            messageControl.value &&
            messageControl.value.trim() !== "") {
            this.socketService.sendMessage(messageControl.value);
            this.apiService
                .sendPersonalMessage({ message: messageControl.value, sender: this.currentUser.profileImg, receiver: this.groupId })
                .subscribe(() => {
                this.mainApiService.sendMessageNotification(messageControl.value, this.currentUser.profileImg);
                this.messageForm.reset();
                this.scrollToBottom();
            }, (error) => {
                console.error("Error sending message:", error);
            });
        }
    }
    listenForMessages() {
        this.chatService.getNewMessage().subscribe((message) => {
            if (message.groupId === this.groupId) {
                this.messages.push(message);
                this.scrollToBottom();
            }
        });
    }
    fetchInitialMessages() {
        this.apiService.getUserMessages(this.groupId).subscribe((messages) => {
            this.messages = messages;
            this.scrollToBottom();
        }, (error) => {
            console.error("Error fetching initial messages:", error);
        });
    }
    scrollToBottom() {
        this.content.scrollToBottom();
    }
    groupInfo() {
        this.router.navigateByUrl("/group-info/" + this.groupId);
    }
    async openChatPopup(message) {
        const modal = await this.modalController.create({
            component: DeleteConfirmationComponent,
            componentProps: {
                message: message, // Pass the clicked message to the popup component
            },
        });
        return await modal.present();
    }
    Leave() { }
};
__decorate([
    ViewChild(IonContent)
], ChatPage.prototype, "content", void 0);
ChatPage = __decorate([
    Component({
        selector: "app-chat",
        templateUrl: "./chat.page.html",
        styleUrls: ["./chat.page.scss"],
    })
], ChatPage);
export { ChatPage };
//# sourceMappingURL=chat.page.js.map