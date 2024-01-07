import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Newuser1Page } from './newuser1.page';
const routes = [
    {
        path: '',
        component: Newuser1Page
    }
];
export let Newuser1PageRoutingModule = class Newuser1PageRoutingModule {
};
Newuser1PageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], Newuser1PageRoutingModule);
//# sourceMappingURL=newuser1-routing.module.js.map