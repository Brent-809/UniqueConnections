import { __decorate } from "tslib";
import { Component } from "@angular/core";
import lottie from "lottie-web";
import { animationPath } from "./loading.animation";
let SplashPage = class SplashPage {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.animationDuration = 4000;
    }
    ngOnInit() {
        const animationContainer = this.elementRef.nativeElement.querySelector("#lottie-container");
        this.animation = lottie.loadAnimation({
            container: animationContainer,
            renderer: "svg",
            loop: false,
            autoplay: false,
            path: animationPath,
        });
        this.playAnimationWithDuration();
    }
    playAnimationWithDuration() {
        this.animation.play();
        setTimeout(() => { }, this.animationDuration);
    }
};
SplashPage = __decorate([
    Component({
        selector: "app-splash",
        templateUrl: "./splash.page.html",
        styleUrls: ["./splash.page.scss"],
    })
], SplashPage);
export { SplashPage };
//# sourceMappingURL=splash.page.js.map