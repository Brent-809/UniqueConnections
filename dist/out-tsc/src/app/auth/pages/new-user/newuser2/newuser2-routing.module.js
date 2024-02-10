import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Newuser2Page } from './newuser2.page';
const routes = [
    {
        path: '',
        component: Newuser2Page
    }
];
let Newuser2PageRoutingModule = class Newuser2PageRoutingModule {
};
Newuser2PageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], Newuser2PageRoutingModule);
export { Newuser2PageRoutingModule };
//# sourceMappingURL=newuser2-routing.module.js.map