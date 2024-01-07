import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Register2Page } from './register2.page';
const routes = [
    {
        path: '',
        component: Register2Page
    }
];
export let Register2PageRoutingModule = class Register2PageRoutingModule {
};
Register2PageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], Register2PageRoutingModule);
//# sourceMappingURL=register2-routing.module.js.map