import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Newuser3Page } from './newuser3.page';
const routes = [
    {
        path: '',
        component: Newuser3Page
    }
];
let Newuser3PageRoutingModule = class Newuser3PageRoutingModule {
};
Newuser3PageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], Newuser3PageRoutingModule);
export { Newuser3PageRoutingModule };
//# sourceMappingURL=newuser3-routing.module.js.map