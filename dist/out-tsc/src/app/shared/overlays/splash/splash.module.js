import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SplashPageRoutingModule } from './splash-routing.module';
import { SplashPage } from './splash.page';
let SplashPageModule = class SplashPageModule {
};
SplashPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SplashPageRoutingModule
        ],
        declarations: [SplashPage]
    })
], SplashPageModule);
export { SplashPageModule };
//# sourceMappingURL=splash.module.js.map