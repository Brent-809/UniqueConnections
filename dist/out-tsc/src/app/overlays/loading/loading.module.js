import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoadingPageRoutingModule } from './loading-routing.module';
import { LoadingPage } from './loading.page';
export let LoadingPageModule = class LoadingPageModule {
};
LoadingPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            LoadingPageRoutingModule
        ],
        declarations: [LoadingPage]
    })
], LoadingPageModule);
//# sourceMappingURL=loading.module.js.map