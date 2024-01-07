import { Component, ElementRef, OnInit } from "@angular/core";
import { Navigation, Router } from "@angular/router";
import { loading } from "../../loading";
import { HomeApiService } from "../home-api.service";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"],
})
export class TabsPage implements OnInit {
  userImg: any[] = [];
  private animation: any;

  constructor(
    private apiService: HomeApiService,
    private router: Router,
    private loading: loading,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    const userId = this.apiService.getUserIdFromToken();
    if (userId) {
      this.apiService
        .getUserById(userId.toString())
        .subscribe((userInfo: any) => {
          if (userInfo.isNewUser === true) {
            this.loading.presentLoading();
            setTimeout(() => {
              this.router.navigate(["/newuser"]);
            }, 1500);
            this.loading.hideLoading();
          } else {
            setTimeout(() => {
              this.router.navigate(["/"]);
              this.userImg = userInfo.profileImg;
            }, 1500);
          }
        });
    } else {
      this.loading.hideLoading();
    }
  }
}
