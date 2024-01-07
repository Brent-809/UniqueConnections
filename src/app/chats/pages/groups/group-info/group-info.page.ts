import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { ChatsApiService } from "../../../chats-api.service";

@Component({
  selector: "app-group-info",
  templateUrl: "./group-info.page.html",
  styleUrls: ["./group-info.page.scss"],
})
export class GroupInfoPage implements OnInit {
  background = {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80)",
  };

  joinButtonText!: string;

  tabType = "posts";

  feeds: any;
  events: any;
  groups: any;
  category!: string;
  name!: string;
  img!: string;
  desc!: string;
  groupId!: string;
  response!: object;
  memberCount!: number;
  members!: number;

  constructor(
    private modalController: ModalController,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ChatsApiService
  ) { }

  async ngOnInit() {
    await this.fetchGroupDetails();
    this.joinButtonText = this.getRandomJoinButtonText();
    this.getGroupMembers();
  }

  getGroupMembers() {
    this.apiService.groupMembers({ id: this.groupId }).subscribe(
      (response: any) => {
        this.memberCount = response.members;
      },
      (error) => {
        console.error("Failed to fetch group members:", error);
        // Handle the error accordingly
      }
    );
  }

  getRandomJoinButtonText(): string {
    const buttonTexts = [
      "Terug naar chat",
      "Kom bij chat",
      "Algemene groep",
      "Terug naar allen",
      "Laat ons praten",
      "Groep weer open",
      "Samen chatten",
      "Allen welkom",
      "Terug naar de groep",
      "Weer samen!",
      "Algemeen nu",
      "Terug in chat",
      "Kom bij ons",
      "Chat herladen",
      "Groepsgesprek",
      "Terug allemaal",
      "Verzamel je weer",
      "Chatten nu!",
      "Terug naar allen",
      "Samen praten",
      "Groep chat actief",
      "Allen in chat",
      "Terug naar samen",
      "Laat ons babbelen",
      "Groep chat open",
      "Terug bij elkaar",
      "Join de chat",
      "Allemaal welkom",
      "Terug naar chatbox",
      "Terug samen",
      "Samen babbelen",
      "Chat weer live",
      "Herenig met chat",
      "Alleen algemeen",
      "Terug bij de bende",
      "Algemene chat",
      "Herenig in chat",
      "Iedereen terug",
      "Terug in actie",
      "Samen chatten",
      "Groep chat nu!",
      "Weer samen zijn",
      "Terug in gesprek",
      "Laat ons samengaan",
      "Verenigde chat",
      "Allen terugkeren",
      "Terug bij iedereen",
      "Groepspraatje nu",
      "Herenig in chat",
      "Terug naar de babbels",
    ];

    const randomIndex = Math.floor(Math.random() * buttonTexts.length);
    return buttonTexts[randomIndex];
  }

  async fetchGroupDetails(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.route.paramMap.subscribe((params) => {
        const groupId = params.get("id");

        if (groupId) {
          this.apiService.getGroupById(groupId).subscribe(
            (response: any) => {
              if (
                response &&
                response._id &&
                response.name &&
                response.members !== undefined &&
                response.category &&
                response.image &&
                response.description
              ) {
                this.name = response.name;
                this.img = response.image;
                this.category = response.category;
                this.desc = response.description;
                this.response = response;
                this.members = response.members;
                this.groupId = response._id;
              } else {
                console.error("Group details not found");
              }
              resolve();
            },
            (error: any) => {
              console.error("Error retrieving group details:", error);
              reject(error); // Reject the promise if there's an error
            }
          );
        } else {
          console.error("Invalid group ID");
          reject(new Error("Invalid group ID")); // Reject the promise for invalid groupId
        }
      });
    });
  }

  goToChat() {
    this.router.navigateByUrl(`/group/${this.groupId}`);
  }

  goToSettings() {
    this.router.navigate(["settings"]);
  }
}
