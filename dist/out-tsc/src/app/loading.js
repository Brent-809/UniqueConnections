import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
let loading = class loading {
    constructor(loadingController) {
        this.loadingController = loadingController;
    }
    async presentLoading() {
        this.loading = true;
        return await this.loadingController.create({}).then((a) => {
            a.present().then(() => {
                if (!this.loading) {
                    a.dismiss();
                }
            });
        });
    }
    async hideLoading() {
        this.loading = false;
        return await this.loadingController.dismiss();
    }
};
loading = __decorate([
    Injectable({
        providedIn: "root",
    })
], loading);
export { loading };
//# sourceMappingURL=loading.js.map