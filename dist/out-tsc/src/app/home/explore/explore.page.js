import { __decorate } from "tslib";
import { Component } from "@angular/core";
import { register } from "swiper/element/bundle";
import { map } from "rxjs";
import { LoadingPage } from "../../shared/overlays/loading/loading.page";
register();
let ExplorePage = class ExplorePage {
    handleRefresh(event) {
        setTimeout(() => {
            this.ngOnInit();
            event.target.complete();
        }, 2000);
    }
    viewStory(index) {
        this.router.navigate(["story", index]);
    }
    navigateToDetail() {
        this.router.navigate(["post-detail"]);
    }
    eventDetail(item) {
        let navigationExtras = {
            state: {
                event: item,
            },
        };
        this.router.navigate(["event-detail"], navigationExtras);
    }
    constructor(apiService, router, alertController, modalCtrl) {
        this.apiService = apiService;
        this.router = router;
        this.alertController = alertController;
        this.modalCtrl = modalCtrl;
        this.groupcategories = [];
        this.follow = [];
        this.feeds = [];
        this.groups = [];
        this.loading = false;
        this.groupJoinButtons = [
            {
                text: "Nee",
                handler: () => {
                    this.alertController.dismiss();
                },
            },
            {
                text: "Ja",
                handler: (groupId) => {
                    this.JoinGroupFirstTime(groupId);
                },
            },
        ];
        this.followConfig = {
            initialSlide: 0,
            spaceBetween: 30,
            slidesPerView: 3,
            loop: true,
        };
        this.storiesConfig = {
            initialSlide: 0,
            spaceBetween: 10,
            slidesPerView: 2.8,
        };
        this.options = {
            path: "/assets/heart.json",
        };
        this.joinGroup = (groupId) => {
            const userId = this.apiService.getUserIdFromToken();
            if (!userId) {
                console.error("User ID not found in token");
                return;
            }
            this.apiService.getUserById(userId).subscribe((user) => {
                const joinedGroups = user.joinedGroups;
                if (joinedGroups.includes(groupId)) {
                    this.router.navigate(["/group/", groupId]);
                }
                else {
                    const groupToJoin = this.groups.find((group) => group._id === groupId);
                    if (groupToJoin) {
                        this.presentJoinGroupAlert(groupId);
                    }
                    else {
                        console.error("Group not found");
                    }
                }
            }, (error) => {
                console.error("Error fetching user details:", error);
            });
        };
    }
    async ngOnInit() {
        this.presentLoading();
        await this.getGroups().subscribe((response) => {
            this.groups = response.filter((group) => group.featured === true);
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
            .then((a) => {
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
    getGroupMembers(groupId) {
        return this.apiService.groupMembers(groupId);
    }
    getTotalMembers(groupId) {
        return this.getGroupMembers(groupId).pipe(map((response) => response.count));
    }
    animationCreated(animationItem) { }
    presentJoinGroupAlert(groupId) {
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
                }
                else {
                    return button;
                }
            }),
        })
            .then((alert) => alert.present());
    }
    JoinGroupFirstTime(groupId) {
        const userId = this.apiService.getUserIdFromToken();
        if (!userId) {
            console.error("User ID not found in token");
            return;
        }
        this.apiService.getUserById(userId).subscribe((user) => {
            this.apiService.joinGroup(groupId).subscribe((data) => {
                this.router.navigate(["/group/", groupId]);
            }, (error) => {
                console.error(error);
            });
        }, (error) => {
            console.error("Error fetching user details:", error);
        });
    }
    logout() {
        this.apiService.logout();
    }
    goToNotifications() {
        this.router.navigateByUrl("/tabs/notif");
    }
    navigateToPage(id) {
        this.router.navigate(["/group/", id]);
    }
};
ExplorePage = __decorate([
    Component({
        selector: "app-explore",
        templateUrl: "./explore.page.html",
        styleUrls: ["./explore.page.scss"],
    })
], ExplorePage);
export { ExplorePage };
//# sourceMappingURL=explore.page.js.map