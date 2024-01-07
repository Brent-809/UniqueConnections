import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MygroupsPage } from './mygroups.page';
const routes = [
    {
        path: '',
        component: MygroupsPage
    }
];
export let MygroupsPageRoutingModule = class MygroupsPageRoutingModule {
};
MygroupsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], MygroupsPageRoutingModule);
//# sourceMappingURL=mygroups-routing.module.js.map