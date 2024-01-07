import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Newuser1PageRoutingModule } from './newuser1-routing.module';
import { Newuser1Page } from './newuser1.page';
export let Newuser1PageModule = class Newuser1PageModule {
};
Newuser1PageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            Newuser1PageRoutingModule,
            ReactiveFormsModule
        ],
        declarations: [Newuser1Page]
    })
], Newuser1PageModule);
//# sourceMappingURL=newuser1.module.js.map