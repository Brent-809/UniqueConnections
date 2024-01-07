import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let RefresherComponent = class RefresherComponent {
    constructor() {
        this.images = []; // Array to hold the paths of the static images
        this.refreshing = false; // Flag to indicate if the refresher is active
        // Populate the images array with the paths of the static images
        for (let i = 1; i <= 10; i++) {
            this.images.push(`assets/images/frame${i}.png`);
        }
    }
    doRefresh(event) {
        this.refreshing = true;
        // Perform your refreshing logic here, such as making API requests
        // Simulate an asynchronous operation (you can replace this with your actual logic)
        setTimeout(() => {
            // Stop the refresher and reset the refreshing flag
            this.refreshing = false;
            event.target.complete();
        }, 2000);
    }
};
RefresherComponent = __decorate([
    Component({
        selector: 'app-refresher',
        templateUrl: './refresher.component.html',
        styleUrls: ['./refresher.component.scss'],
    })
], RefresherComponent);
//# sourceMappingURL=refresher.component.js.map