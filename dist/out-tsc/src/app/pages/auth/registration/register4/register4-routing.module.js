import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Register4Page } from './register4.page';
const routes = [
    {
        path: '',
        component: Register4Page
    }
];
export let Register4PageRoutingModule = class Register4PageRoutingModule {
};
Register4PageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], Register4PageRoutingModule);
//# sourceMappingURL=register4-routing.module.js.map