import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateGroupPage } from './create-group.page';
const routes = [
    {
        path: '',
        component: CreateGroupPage
    }
];
export let CreateGroupPageRoutingModule = class CreateGroupPageRoutingModule {
};
CreateGroupPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], CreateGroupPageRoutingModule);
//# sourceMappingURL=create-group-routing.module.js.map