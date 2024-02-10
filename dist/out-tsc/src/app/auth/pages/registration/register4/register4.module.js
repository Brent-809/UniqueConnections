import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Register4PageRoutingModule } from './register4-routing.module';
import { Register4Page } from './register4.page';
let Register4PageModule = class Register4PageModule {
};
Register4PageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            Register4PageRoutingModule
        ],
        declarations: [Register4Page]
    })
], Register4PageModule);
export { Register4PageModule };
//# sourceMappingURL=register4.module.js.map