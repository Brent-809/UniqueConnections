import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfilePage } from './profile.page';
const routes = [
    {
        path: '',
        component: ProfilePage
    }
];
export let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ProfilePageRoutingModule);
//# sourceMappingURL=profile-routing.module.js.map