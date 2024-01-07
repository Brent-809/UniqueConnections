import { __decorate } from "tslib";
import { Component, Input, } from '@angular/core';
export let ImageModalPage = class ImageModalPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
        this.background = {
            backgroundImage: `url(${this.data})`
        };
    }
    dismissModal() {
        this.modalController.dismiss();
    }
};
__decorate([
    Input()
], ImageModalPage.prototype, "data", void 0);
ImageModalPage = __decorate([
    Component({
        selector: 'app-image-modal',
        templateUrl: './image-modal.page.html',
        styleUrls: ['./image-modal.page.scss'],
    })
], ImageModalPage);
//# sourceMappingURL=image-modal.page.js.map