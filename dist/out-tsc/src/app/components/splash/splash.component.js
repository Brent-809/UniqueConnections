import { __decorate } from "tslib";
import { Component } from '@angular/core';
import lottie from "lottie-web";
import { animationPath } from "./loading.animation";
export let SplashComponent = class SplashComponent {
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
            console.log('Animation completed!');
        }, this.animationDuration);
    }
};
SplashComponent = __decorate([
    Component({
        selector: 'app-splash',
        templateUrl: './splash.component.html',
        styleUrls: ['./splash.component.scss'],
    })
], SplashComponent);
//# sourceMappingURL=splash.component.js.map