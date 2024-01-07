import { __awaiter, __decorate } from "tslib";
import { Injectable } from "@angular/core";
export let loading = class loading {
    constructor(loadingController) {
        this.loadingController = loadingController;
    }
    presentLoading() {
        return __awaiter(this, void 0, void 0, function* () {
            this.loading = true;
            return yield this.loadingController.create({}).then((a) => {
                a.present().then(() => {
                    console.log("presented");
                    if (!this.loading) {
                        a.dismiss().then(() => console.log("abort presenting"));
                    }
                });
            });
        });
    }
    hideLoading() {
        return __awaiter(this, void 0, void 0, function* () {
            this.loading = false;
            return yield this.loadingController
                .dismiss()
                .then(() => console.log("dismissed"));
        });
    }
};
loading = __decorate([
    Injectable({
        providedIn: "root",
    })
], loading);
//# sourceMappingURL=loading.js.map