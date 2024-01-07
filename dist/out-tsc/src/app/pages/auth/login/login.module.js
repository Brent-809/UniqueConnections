import { __decorate } from "tslib";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { NgParticlesModule } from 'ng-particles';
import { ConfettiComponent } from "../../../components/particles/confetti/confetti.component";
import { NgxSpinnerModule } from "ngx-spinner";
export let LoginPageModule = class LoginPageModule {
};
LoginPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule.forRoot({ innerHTMLTemplatesEnabled: true }),
            LoginPageRoutingModule,
            ReactiveFormsModule,
            NgParticlesModule,
            NgxSpinnerModule
        ],
        declarations: [LoginPage, ConfettiComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
], LoginPageModule);
//# sourceMappingURL=login.module.js.map