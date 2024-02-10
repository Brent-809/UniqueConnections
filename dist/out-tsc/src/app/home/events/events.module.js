import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EventsPageRoutingModule } from './events-routing.module';
import { EventsPage } from './events.page';
let EventsPageModule = class EventsPageModule {
};
EventsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            EventsPageRoutingModule
        ],
        declarations: [EventsPage]
    })
], EventsPageModule);
export { EventsPageModule };
//# sourceMappingURL=events.module.js.map