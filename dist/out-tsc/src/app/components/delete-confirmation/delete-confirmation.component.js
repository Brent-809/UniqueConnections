import { __awaiter, __decorate } from "tslib";
import { Component } from "@angular/core";
export let DeleteConfirmationComponent = class DeleteConfirmationComponent {
    ngOnInit() { }
    constructor(modalController) {
        this.modalController = modalController;
    }
    dismiss(confirmed) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(confirmed);
        });
    }
};
DeleteConfirmationComponent = __decorate([
    Component({
        selector: "app-delete-confirmation",
        templateUrl: "./delete-confirmation.component.html",
        styleUrls: ["./delete-confirmation.component.scss"],
    })
], DeleteConfirmationComponent);
//# sourceMappingURL=delete-confirmation.component.js.map