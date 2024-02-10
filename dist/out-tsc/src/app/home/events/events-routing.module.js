import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventsPage } from './events.page';
const routes = [
    {
        path: '',
        component: EventsPage
    }
];
let EventsPageRoutingModule = class EventsPageRoutingModule {
};
EventsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], EventsPageRoutingModule);
export { EventsPageRoutingModule };
//# sourceMappingURL=events-routing.module.js.map