import { __decorate } from "tslib";
import { Component } from "@angular/core";
import { LoadingPage } from "../../overlays/loading/loading.page";
import { environment } from "../../../../environments/environment";
let ErrorPage = class ErrorPage {
    constructor(http, router, modalController) {
        this.http = http;
        this.router = router;
        this.modalController = modalController;
    }
    ngOnInit() {
        this.makeRequest();
    }
    async makeRequest() {
        const apiUrl = environment.apiUrl;
        const loading = await this.modalController.create({
            component: LoadingPage,
        });
        await loading.present();
        this.http.get(apiUrl).subscribe(async () => {
            this.router.navigateByUrl("/");
            await loading.dismiss();
        }, async (error) => {
            // Handle error
            console.error(error);
            this.router.navigateByUrl("/error");
            await loading.dismiss();
        });
    }
};
ErrorPage = __decorate([
    Component({
        selector: "app-error",
        templateUrl: "./error.page.html",
        styleUrls: ["./error.page.scss"],
    })
], ErrorPage);
export { ErrorPage };
//# sourceMappingURL=error.page.js.map