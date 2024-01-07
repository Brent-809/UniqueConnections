import { __awaiter, __decorate } from "tslib";
import { Component } from "@angular/core";
import { LoadingPage } from "../../overlays/loading/loading.page";
import { environment } from "../../../environments/environment";
export let ErrorPage = class ErrorPage {
    constructor(http, router, modalController) {
        this.http = http;
        this.router = router;
        this.modalController = modalController;
    }
    ngOnInit() {
        this.makeRequest();
    }
    makeRequest() {
        return __awaiter(this, void 0, void 0, function* () {
            const apiUrl = environment.apiUrl;
            const loading = yield this.modalController.create({
                component: LoadingPage,
            });
            yield loading.present();
            this.http.get(apiUrl).subscribe(() => __awaiter(this, void 0, void 0, function* () {
                this.router.navigateByUrl("/");
                yield loading.dismiss();
            }), (error) => __awaiter(this, void 0, void 0, function* () {
                // Handle error
                console.error(error);
                this.router.navigateByUrl("/error");
                yield loading.dismiss();
            }));
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
//# sourceMappingURL=error.page.js.map