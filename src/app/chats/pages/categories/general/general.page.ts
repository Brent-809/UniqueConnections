import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit, Renderer2 } from "@angular/core";
import { Router } from "@angular/router";
import { ChatsApiService } from "src/app/chats/chats-api.service";

@Component({
  selector: "app-general",
  templateUrl: "./general.page.html",
  styleUrls: ["./general.page.scss"],
})
export class GeneralPage implements OnInit {
  joinButtonText!: string;
  refreshing: boolean = false;
  images: string[] = [];
  groupIds: number[] = [];
  groups: any[] = [];

  constructor(
    private apiService: ChatsApiService,
    private router: Router,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.joinButtonText = this.getRandomJoinButtonText();
    this.getGroups();
  }

  getGroups(): void {
    this.apiService.getGroups().subscribe(
      (response: any) => {
        if (response && Array.isArray(response.groups)) {
          this.groups = response.groups.reduce(
            (acc: any[], groupArray: any) => {
              return acc.concat(groupArray.map((group: any) => group));
            },
            []
          );

          // Filter out valid groups
          this.groups = this.groups.filter((group: any) => group.id);
        } else {
          console.error(
            "Invalid response format. Expected an object with a 'groups' property."
          );
        }
      },
      (error: any) => {
        console.error("Error retrieving group IDs:", error);
      }
    );
  }

  getRandom(event: any) {
    setTimeout(() => {
      this.joinButtonText = this.getRandomJoinButtonText();
      event.target.complete();
    }, 1000);
  }

  joinGroup(groupId: number) {
    this.apiService.joinGroup(groupId.toString()).subscribe(
      () => {
        this.router.navigateByUrl("/group/" + groupId);
      },
      (httpError: HttpErrorResponse) => {
        console.error("Error joining group:", httpError);
        if (httpError.status === 200) {
          if (httpError.error.error === "User and group already exist") {
            this.router.navigateByUrl("/group/" + groupId);
          } else {
            // Handle other 403 errors
          }
        } else {
          console.error("Unexpected error occurred:", httpError);
        }
      }
    );
  }  

  goToGroupInfo(groupId: number) {
    this.router.navigateByUrl("/group-info/" + groupId);
  }
  
  getRandomJoinButtonText(): string {
    const buttonTexts = [
      "Join nu!",
      "Sluit je aan!",
      "Word lid!",
      "Doe mee!",
      "Verbind je!",
      "Maak deel uit!",
      "Vorm een groep!",
      "Ontdek samen!",
      "Samen sterker!",
      "Groep toetreden",
      "Kom erbij!",
      "Word een team!",
      "Join community!",
      "Sluit je aan ons!",
      "Verenig je met ons!",
      "Get your groove on!",
      "Embrace awesome!",
      "Let's rock this!",
      "Join cool kids!",
      "Unleash fabulosity!",
      "Be a rainbow warrior!",
      "Connect and conquer!",
      "Jump into fun zone!",
      "Embrace uniqueness!",
      "Dance like nobody's!",
      "Spread love, join us!",
      "Unlock true potential!",
      "Together, unstoppable!",
      "Join party people!",
      "Embrace togetherness!",
      "Get in on excitement!",
      "Create something amazing!",
      "Join laughter revolution!",
      "Be yourself, join!",
      "Break free, join us!",
      "Embrace inner hero!",
      "Step into adventure!",
      "Join extraordinary!",
      "Find your tribe, join!",
      "Unleash your wild!",
      "Create awesome memories!",
      "Join fun, fly high!",
      "Be part, awesome squad!",
      "Join love revolution!",
      "Dive into possibilities!",
    ];

    const randomIndex = Math.floor(Math.random() * buttonTexts.length);
    return buttonTexts[randomIndex];
  }

  changeButtonStyle() {
    const button = document.getElementById("join"); // Replace 'myButton' with the actual ID of your button
    this.renderer.setStyle(button, "background-color", "red");
    this.renderer.setStyle(button, "color", "white");
    // Add any other style changes you want to make
  }
}
