import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivityPageRoutingModule } from './activity-routing.module';
import { ActivityPage } from './activity.page';
let ActivityPageModule = class ActivityPageModule {
};
ActivityPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ActivityPageRoutingModule
        ],
        declarations: [ActivityPage]
    })
], ActivityPageModule);
export { ActivityPageModule };
//# sourceMappingURL=activity.module.js.map