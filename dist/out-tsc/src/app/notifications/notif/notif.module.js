import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NotifPageRoutingModule } from './notif-routing.module';
import { NotifPage } from './notif.page';
let NotifPageModule = class NotifPageModule {
};
NotifPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            NotifPageRoutingModule
        ],
        declarations: [NotifPage]
    })
], NotifPageModule);
export { NotifPageModule };
//# sourceMappingURL=notif.module.js.map