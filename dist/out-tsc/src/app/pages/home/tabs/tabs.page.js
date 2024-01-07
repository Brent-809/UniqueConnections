import { __decorate } from "tslib";
import { Component } from "@angular/core";
export let TabsPage = class TabsPage {
    constructor(apiService, router, loading) {
        this.apiService = apiService;
        this.router = router;
        this.loading = loading;
    }
    ngOnInit() {
        const userId = this.apiService.getUserIdFromToken();
        if (userId) {
            this.apiService
                .getUserById(userId.toString())
                .subscribe((newUserStatus) => {
                if (newUserStatus.isNewUser === true) {
                    this.loading.presentLoading();
                    // Gebruiker is nieuw, navigeer naar de nieuwe gebruiker pagina
                    setTimeout(() => {
                        this.router.navigate(["/newuser"]);
                    }, 1500);
                    this.loading.hideLoading();
                }
                else {
                    setTimeout(() => {
                        this.router.navigate(["/"]);
                    }, 1500);
                }
            });
        }
        else {
            this.loading.hideLoading();
        }
    }
    CreateGroup() {
        this.router.navigateByUrl("/create-group");
    }
};
TabsPage = __decorate([
    Component({
        selector: "app-tabs",
        templateUrl: "tabs.page.html",
        styleUrls: ["tabs.page.scss"],
    })
], TabsPage);
//# sourceMappingURL=tabs.page.js.map