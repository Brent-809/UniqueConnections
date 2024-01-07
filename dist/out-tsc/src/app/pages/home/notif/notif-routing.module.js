import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotifPage } from './notif.page';
const routes = [
    {
        path: '',
        component: NotifPage
    }
];
export let NotifPageRoutingModule = class NotifPageRoutingModule {
};
NotifPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], NotifPageRoutingModule);
//# sourceMappingURL=notif-routing.module.js.map