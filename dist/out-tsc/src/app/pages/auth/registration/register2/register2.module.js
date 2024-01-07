import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Register2PageRoutingModule } from './register2-routing.module';
import { Register2Page } from './register2.page';
export let Register2PageModule = class Register2PageModule {
};
Register2PageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            Register2PageRoutingModule,
            ReactiveFormsModule
        ],
        declarations: [Register2Page]
    })
], Register2PageModule);
//# sourceMappingURL=register2.module.js.map