import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import jwt_decode from "jwt-decode";
import { HomeApiService } from "../home-api.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  background = {
    backgroundImage:
      "url(https://img.freepik.com/free-vector/gradient-background-green-modern-designs_343694-2067.jpg?w=1800&t=st=1692990043~exp=1692990643~hmac=fb8abf795315ff965dbf71933ee834e7a133dfb24f3845d73122d4cc9b75630a)",
  };

  tabType = "posts";

  userId: any = [];
  feeds: unknown;
  events: unknown;
  groups: unknown;
  name: string = "";
  bio: string = "";
  profileImg: string = "";
  joinedGroups: any[] = [];

  constructor(
    private modalController: ModalController,
    private router: Router,
    private apiService: HomeApiService
  ) {}

  ngOnInit() {
    const userId = this.apiService.getUserIdFromToken();
    if (userId) {
      this.apiService
        .getUserById(userId.toString())
        .subscribe((userInfo: any) => {
          if (userInfo.name) {
            this.name = userInfo.name;
            this.bio = userInfo.bio;
            this.profileImg = userInfo.profileImg;
            this.joinedGroups = userInfo.joinedGroups;
          } else {
            setTimeout(() => {
              this.router.navigate(["/"]);
            }, 1500);
          }
        });
    }
  }

  goToSettings() {
    this.router.navigate(["settings"]);
  }
}
