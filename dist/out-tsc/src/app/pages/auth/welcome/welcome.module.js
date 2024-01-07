import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WelcomePageRoutingModule } from './welcome-routing.module';
import { WelcomePage } from './welcome.page';
export let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            WelcomePageRoutingModule
        ],
        declarations: [WelcomePage]
    })
], WelcomePageModule);
//# sourceMappingURL=welcome.module.js.map