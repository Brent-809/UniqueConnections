import { __decorate } from "tslib";
import { Component } from "@angular/core";
import { confirmAnimationPath } from "./confirmation.animation";
import lottie from "lottie-web";
let Register4Page = class Register4Page {
    constructor(elementRef, registerService) {
        this.elementRef = elementRef;
        this.registerService = registerService;
        this.animationDuration = 4000;
    }
    ngOnInit() {
        this.registerService.removeFromLocalstorage();
        const animationContainer = this.elementRef.nativeElement.querySelector("#lottie-container");
        this.animation = lottie.loadAnimation({
            container: animationContainer,
            renderer: "svg",
            loop: false,
            autoplay: false,
            path: confirmAnimationPath,
        });
        this.playAnimationWithDuration();
    }
    playAnimationWithDuration() {
        this.animation.play();
        setTimeout(() => { }, this.animationDuration);
    }
};
Register4Page = __decorate([
    Component({
        selector: "app-register4",
        templateUrl: "./register4.page.html",
        styleUrls: ["./register4.page.scss"],
    })
], Register4Page);
export { Register4Page };
//# sourceMappingURL=register4.page.js.map