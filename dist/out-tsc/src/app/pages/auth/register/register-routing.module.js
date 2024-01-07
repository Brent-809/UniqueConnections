import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterPage } from './register.page';
const routes = [
    {
        path: '',
        component: RegisterPage
    }
];
export let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], RegisterPageRoutingModule);
//# sourceMappingURL=register-routing.module.js.map