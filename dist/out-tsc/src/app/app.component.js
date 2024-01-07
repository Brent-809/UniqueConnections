import { __awaiter, __decorate } from "tslib";
import { Component } from "@angular/core";
import { environment } from "../environments/environment";
export let AppComponent = class AppComponent {
    constructor(router, http, platform, alertCtrl) {
        this.router = router;
        this.http = http;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.showSplash = true;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            setTimeout(() => {
                this.showSplash = false;
            }, 3000);
            this.makeRequest();
        });
    }
    makeRequest() {
        const apiUrl = environment.apiUrl;
        this.http.get(apiUrl).subscribe(() => { }, (error) => {
            console.error(error);
            this.router.navigateByUrl("/error");
        });
    }
};
AppComponent = __decorate([
    Component({
        selector: "app-root",
        templateUrl: "app.component.html",
        styleUrls: ["app.component.scss"],
    })
], AppComponent);
//# sourceMappingURL=app.component.js.map