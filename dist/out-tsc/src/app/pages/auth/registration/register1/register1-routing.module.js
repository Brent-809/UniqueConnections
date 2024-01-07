import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Register1Page } from './register1.page';
const routes = [
    {
        path: '',
        component: Register1Page
    }
];
export let Register1PageRoutingModule = class Register1PageRoutingModule {
};
Register1PageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], Register1PageRoutingModule);
//# sourceMappingURL=register1-routing.module.js.map