import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomePage } from './welcome.page';
const routes = [
    {
        path: '',
        component: WelcomePage
    }
];
export let WelcomePageRoutingModule = class WelcomePageRoutingModule {
};
WelcomePageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], WelcomePageRoutingModule);
//# sourceMappingURL=welcome-routing.module.js.map