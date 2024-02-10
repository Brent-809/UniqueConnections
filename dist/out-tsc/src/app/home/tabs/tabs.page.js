import { __decorate } from "tslib";
import { Component } from "@angular/core";
let TabsPage = class TabsPage {
    constructor(apiService, router, loading, elementRef) {
        this.apiService = apiService;
        this.router = router;
        this.loading = loading;
        this.elementRef = elementRef;
        this.userImg = [];
    }
    ngOnInit() {
        const userId = this.apiService.getUserIdFromToken();
        if (userId) {
            this.apiService
                .getUserById(userId.toString())
                .subscribe((userInfo) => {
                if (userInfo.isNewUser === true) {
                    this.loading.presentLoading();
                    setTimeout(() => {
                        this.router.navigate(["/newuser"]);
                    }, 1500);
                    this.loading.hideLoading();
                }
                else {
                    setTimeout(() => {
                        this.router.navigate(["/"]);
                        this.userImg = userInfo.profileImg;
                    }, 1500);
                }
            });
        }
        else {
            this.loading.hideLoading();
        }
    }
};
TabsPage = __decorate([
    Component({
        selector: "app-tabs",
        templateUrl: "tabs.page.html",
        styleUrls: ["tabs.page.scss"],
    })
], TabsPage);
export { TabsPage };
//# sourceMappingURL=tabs.page.js.map