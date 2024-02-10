import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivityPage } from './activity.page';
const routes = [
    {
        path: '',
        component: ActivityPage
    }
];
let ActivityPageRoutingModule = class ActivityPageRoutingModule {
};
ActivityPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ActivityPageRoutingModule);
export { ActivityPageRoutingModule };
//# sourceMappingURL=activity-routing.module.js.map