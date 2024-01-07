import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImageModalPage } from './image-modal.page';
const routes = [
    {
        path: '',
        component: ImageModalPage
    }
];
export let ImageModalPageRoutingModule = class ImageModalPageRoutingModule {
};
ImageModalPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ImageModalPageRoutingModule);
//# sourceMappingURL=image-modal-routing.module.js.map