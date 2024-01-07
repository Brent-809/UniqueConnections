import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadingPage } from './loading.page';
const routes = [
    {
        path: '',
        component: LoadingPage
    }
];
export let LoadingPageRoutingModule = class LoadingPageRoutingModule {
};
LoadingPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], LoadingPageRoutingModule);
//# sourceMappingURL=loading-routing.module.js.map