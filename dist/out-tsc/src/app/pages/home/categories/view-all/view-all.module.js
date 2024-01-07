import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewAllPageRoutingModule } from './view-all-routing.module';
import { ViewAllPage } from './view-all.page';
export let ViewAllPageModule = class ViewAllPageModule {
};
ViewAllPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ViewAllPageRoutingModule
        ],
        declarations: [ViewAllPage]
    })
], ViewAllPageModule);
//# sourceMappingURL=view-all.module.js.map