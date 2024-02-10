import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GeneralPage } from './general.page';
const routes = [
    {
        path: '',
        component: GeneralPage
    }
];
let GeneralPageRoutingModule = class GeneralPageRoutingModule {
};
GeneralPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], GeneralPageRoutingModule);
export { GeneralPageRoutingModule };
//# sourceMappingURL=general-routing.module.js.map