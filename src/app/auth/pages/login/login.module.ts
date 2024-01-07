import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { LoginPageRoutingModule } from "./login-routing.module";

import { LoginPage } from "./login.page";
import { NgParticlesModule } from "ng-particles";

import { ConfettiComponent } from "src/app/shared/components/particles/confetti/confetti.component";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot({ innerHTMLTemplatesEnabled: true }),
    LoginPageRoutingModule,
    ReactiveFormsModule,
    NgParticlesModule,
    NgxSpinnerModule,
  ],
  declarations: [LoginPage, ConfettiComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginPageModule {}
