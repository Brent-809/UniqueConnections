import { __decorate } from "tslib";
import { Component } from "@angular/core";
let DeleteConfirmationComponent = class DeleteConfirmationComponent {
    ngOnInit() { }
    constructor(modalController) {
        this.modalController = modalController;
    }
    async dismiss(confirmed) {
        await this.modalController.dismiss(confirmed);
    }
};
DeleteConfirmationComponent = __decorate([
    Component({
        selector: "app-delete-confirmation",
        templateUrl: "./delete-confirmation.component.html",
        styleUrls: ["./delete-confirmation.component.scss"],
    })
], DeleteConfirmationComponent);
export { DeleteConfirmationComponent };
//# sourceMappingURL=delete-confirmation.component.js.map