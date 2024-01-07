import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GeneralPageRoutingModule } from './general-routing.module';
import { GeneralPage } from './general.page';
export let GeneralPageModule = class GeneralPageModule {
};
GeneralPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            GeneralPageRoutingModule
        ],
        declarations: [GeneralPage]
    })
], GeneralPageModule);
//# sourceMappingURL=general.module.js.map