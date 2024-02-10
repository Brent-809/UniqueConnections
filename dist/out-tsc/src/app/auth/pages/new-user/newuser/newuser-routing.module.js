import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewuserPage } from './newuser.page';
const routes = [
    {
        path: '',
        component: NewuserPage
    }
];
let NewuserPageRoutingModule = class NewuserPageRoutingModule {
};
NewuserPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], NewuserPageRoutingModule);
export { NewuserPageRoutingModule };
//# sourceMappingURL=newuser-routing.module.js.map