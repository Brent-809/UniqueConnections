import { __decorate } from "tslib";
import { Component, ContentChild } from "@angular/core";
import { IonInput } from "@ionic/angular";
export let ShowHidePasswordComponent = class ShowHidePasswordComponent {
    constructor() {
        this.showPassword = false;
    }
    toggleShow() {
        this.showPassword = !this.showPassword;
        this.input.type = this.showPassword ? "text" : "password";
    }
};
__decorate([
    ContentChild(IonInput)
], ShowHidePasswordComponent.prototype, "input", void 0);
ShowHidePasswordComponent = __decorate([
    Component({
        selector: "app-show-hide-password",
        templateUrl: "./show-hide-password.component.html",
        styleUrls: ["./show-hide-password.component.scss"],
    })
], ShowHidePasswordComponent);
//# sourceMappingURL=show-hide-password.component.js.map