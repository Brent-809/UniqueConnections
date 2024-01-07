import { Component, OnInit } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { AnimationOptions } from "ngx-lottie";
import { AnimationItem } from "ngx-lottie/lib/symbols";
import { AlertController, ModalController } from "@ionic/angular";
import { register } from "swiper/element/bundle";
import { Observable, map } from "rxjs";
import { HomeApiService } from "../home-api.service";
import { LoadingPage } from "src/app/shared/overlays/loading/loading.page";
register();

@Component({
  selector: "app-explore",
  templateUrl: "./explore.page.html",
  styleUrls: ["./explore.page.scss"],
})
export class ExplorePage implements OnInit {
  groupcategories: any[] = [];
  follow: any[] = [];
  feeds: any[] = [];
  groups: any[] = [];
  loading = false;
  groupJoinButtons = [
    {
      text: "Nee",
      handler: () => {
        this.alertController.dismiss();
      },
    },
    {
      text: "Ja",
      handler: (groupId: string) => {
        this.JoinGroupFirstTime(groupId);
      },
    },
  ];

  handleRefresh(event: any) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 2000);
  }

  followConfig = {
    initialSlide: 0,
    spaceBetween: 30,
    slidesPerView: 3,
    loop: true,
  };

  storiesConfig = {
    initialSlide: 0,
    spaceBetween: 10,
    slidesPerView: 2.8,
  };

  viewStory(index: any) {
    this.router.navigate(["story", index]);
  }

  navigateToDetail() {
    this.router.navigate(["post-detail"]);
  }

  eventDetail(item: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        event: item,
      },
    };
    this.router.navigate(["event-detail"], navigationExtras);
  }

  constructor(
    private apiService: HomeApiService,
    private router: Router,
    private alertController: AlertController,
    private modalCtrl: ModalController
  ) {}

  async ngOnInit() {
    this.presentLoading();
    await this.getGroups().subscribe((response: any[]) => {
      this.groups = response.filter(
        (group: { featured: boolean }) => group.featured === true
      );

      this.groups.forEach((group) => {
        this.getTotalMembers(group._id).subscribe((totalMembers) => {
          group.totalMembers = totalMembers;
        });
      });
    });
    this.hideLoading();
  }

  async presentLoading() {
    this.loading = true;
    await this.modalCtrl
      .create({
        component: LoadingPage,
      })
      .then((a: any) => {
        a.present().then(() => {
          if (!this.loading) {
            a.dismiss().then(() => console.log("abort presenting"));
          }
        });
      });
  }
  async hideLoading() {
    this.loading = false;
  }

  getGroups() {
    return this.apiService.getGroups();
  }

  getGroupMembers(groupId: string) {
    return this.apiService.groupMembers(groupId);
  }

  getTotalMembers(groupId: string): Observable<number> {
    return this.getGroupMembers(groupId).pipe(
      map((response) => response.count)
    );
  }

  options: AnimationOptions = {
    path: "/assets/heart.json",
  };

  animationCreated(animationItem: AnimationItem): void {}

  joinGroup = (groupId: string) => {
    const userId = this.apiService.getUserIdFromToken();

    if (!userId) {
      console.error("User ID not found in token");
      return;
    }

    this.apiService.getUserById(userId).subscribe(
      (user) => {
        const joinedGroups = user.joinedGroups;

        if (joinedGroups.includes(groupId)) {
          this.router.navigate(["/group/", groupId]);
        } else {
          const groupToJoin = this.groups.find(
            (group) => group._id === groupId
          );

          if (groupToJoin) {
            this.presentJoinGroupAlert(groupId);
          } else {
            console.error("Group not found");
          }
        }
      },
      (error) => {
        console.error("Error fetching user details:", error);
      }
    );
  };

  presentJoinGroupAlert(groupId: string) {
    this.alertController
      .create({
        header: "Treed groep toe",
        subHeader: "Wilt u deze groep toetreden?",
        buttons: this.groupJoinButtons.map((button) => {
          if (button.text === "Ja") {
            return {
              ...button,
              handler: () => this.JoinGroupFirstTime(groupId),
            };
          } else {
            return button;
          }
        }),
      })
      .then((alert) => alert.present());
  }

  JoinGroupFirstTime(groupId: string) {
    const userId = this.apiService.getUserIdFromToken();

    if (!userId) {
      console.error("User ID not found in token");
      return;
    }

    this.apiService.getUserById(userId).subscribe(
      (user) => {
        this.apiService.joinGroup(groupId).subscribe(
          (data: any) => {
            this.router.navigate(["/group/", groupId]);
          },
          (error: any) => {
            console.error(error);
          }
        );
      },
      (error) => {
        console.error("Error fetching user details:", error);
      }
    );
  }

  logout() {
    this.apiService.logout();
  }

  goToNotifications() {
    this.router.navigateByUrl("/tabs/notif");
  }

  navigateToPage(id: string) {
    this.router.navigate(["/group/", id]);
  }
}
