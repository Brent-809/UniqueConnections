import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddPage } from './add.page';
const routes = [
    {
        path: '',
        component: AddPage
    }
];
export let AddPageRoutingModule = class AddPageRoutingModule {
};
AddPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], AddPageRoutingModule);
//# sourceMappingURL=add-routing.module.js.map