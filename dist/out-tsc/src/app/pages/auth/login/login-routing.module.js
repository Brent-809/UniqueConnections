import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginPage } from './login.page';
const routes = [
    {
        path: '',
        component: LoginPage
    }
];
export let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], LoginPageRoutingModule);
//# sourceMappingURL=login-routing.module.js.map