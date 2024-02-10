import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Register3Page } from './register3.page';
const routes = [
    {
        path: '',
        component: Register3Page
    }
];
let Register3PageRoutingModule = class Register3PageRoutingModule {
};
Register3PageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], Register3PageRoutingModule);
export { Register3PageRoutingModule };
//# sourceMappingURL=register3-routing.module.js.map