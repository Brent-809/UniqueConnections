import { __decorate } from "tslib";
import { Component } from "@angular/core";
import lottie from "lottie-web";
import { animationPath } from "./loading.animation";
let LoadingPage = class LoadingPage {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.animationDuration = 4000; // Animation duration in milliseconds
    }
    ngOnInit() {
        const animationContainer = this.elementRef.nativeElement.querySelector('#lottie-container');
        this.animation = lottie.loadAnimation({
            container: animationContainer,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: animationPath
        });
        this.playAnimationWithDuration();
    }
    playAnimationWithDuration() {
        this.animation.play();
        setTimeout(() => {
        }, this.animationDuration);
    }
};
LoadingPage = __decorate([
    Component({
        selector: "app-loading",
        templateUrl: "./loading.page.html",
        styleUrls: ["./loading.page.scss"],
    })
], LoadingPage);
export { LoadingPage };
//# sourceMappingURL=loading.page.js.map