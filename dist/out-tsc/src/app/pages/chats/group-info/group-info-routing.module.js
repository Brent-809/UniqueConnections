import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GroupInfoPage } from './group-info.page';
const routes = [
    {
        path: '',
        component: GroupInfoPage
    }
];
export let GroupInfoPageRoutingModule = class GroupInfoPageRoutingModule {
};
GroupInfoPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], GroupInfoPageRoutingModule);
//# sourceMappingURL=group-info-routing.module.js.map