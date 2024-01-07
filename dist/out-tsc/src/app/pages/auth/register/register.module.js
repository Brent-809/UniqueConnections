import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
import { ShowHidePasswordComponent } from "../../../components/show-hide-password/show-hide-password.component";
export let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ReactiveFormsModule,
            IonicModule,
            RegisterPageRoutingModule
        ],
        declarations: [RegisterPage, ShowHidePasswordComponent]
    })
], RegisterPageModule);
//# sourceMappingURL=register.module.js.map