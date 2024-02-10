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
let ViewAllPageRoutingModule = class ViewAllPageRoutingModule {
};
ViewAllPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ViewAllPageRoutingModule);
export { ViewAllPageRoutingModule };
//# sourceMappingURL=view-all-routing.module.js.map