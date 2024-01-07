import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SplashPage } from './splash.page';
const routes = [
    {
        path: '',
        component: SplashPage
    }
];
export let SplashPageRoutingModule = class SplashPageRoutingModule {
};
SplashPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], SplashPageRoutingModule);
//# sourceMappingURL=splash-routing.module.js.map