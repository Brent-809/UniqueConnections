import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewAllPage } from './view-all.page';
const routes = [
    {
        path: '',
        component: ViewAllPage
    }
];
export let ViewAllPageRoutingModule = class ViewAllPageRoutingModule {
};
ViewAllPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ViewAllPageRoutingModule);
//# sourceMappingURL=view-all-routing.module.js.map