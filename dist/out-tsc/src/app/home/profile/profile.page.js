import { __decorate } from "tslib";
import { Component } from "@angular/core";
let ProfilePage = class ProfilePage {
    constructor(modalController, router, apiService) {
        this.modalController = modalController;
        this.router = router;
        this.apiService = apiService;
        this.background = {
            backgroundImage: "url(https://img.freepik.com/free-vector/gradient-background-green-modern-designs_343694-2067.jpg?w=1800&t=st=1692990043~exp=1692990643~hmac=fb8abf795315ff965dbf71933ee834e7a133dfb24f3845d73122d4cc9b75630a)",
        };
        this.tabType = "posts";
        this.userId = [];
        this.name = "";
        this.bio = "";
        this.profileImg = "";
        this.joinedGroups = [];
    }
    ngOnInit() {
        const userId = this.apiService.getUserIdFromToken();
        if (userId) {
            this.apiService
                .getUserById(userId.toString())
                .subscribe((userInfo) => {
                if (userInfo.name) {
                    this.name = userInfo.name;
                    this.bio = userInfo.bio;
                    this.profileImg = userInfo.profileImg;
                    this.joinedGroups = userInfo.joinedGroups;
                }
                else {
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
};
ProfilePage = __decorate([
    Component({
        selector: "app-profile",
        templateUrl: "./profile.page.html",
        styleUrls: ["./profile.page.scss"],
    })
], ProfilePage);
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map