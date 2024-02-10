import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessagesPage } from './messages.page';
const routes = [
    {
        path: '',
        component: MessagesPage
    }
];
let MessagesPageRoutingModule = class MessagesPageRoutingModule {
};
MessagesPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], MessagesPageRoutingModule);
export { MessagesPageRoutingModule };
//# sourceMappingURL=messages-routing.module.js.map