import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Newuser2PageRoutingModule } from './newuser2-routing.module';
import { Newuser2Page } from './newuser2.page';
export let Newuser2PageModule = class Newuser2PageModule {
};
Newuser2PageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            Newuser2PageRoutingModule,
            ReactiveFormsModule
        ],
        declarations: [Newuser2Page]
    })
], Newuser2PageModule);
//# sourceMappingURL=newuser2.module.js.map