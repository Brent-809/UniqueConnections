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
let NotifPageRoutingModule = class NotifPageRoutingModule {
};
NotifPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], NotifPageRoutingModule);
export { NotifPageRoutingModule };
//# sourceMappingURL=notif-routing.module.js.map