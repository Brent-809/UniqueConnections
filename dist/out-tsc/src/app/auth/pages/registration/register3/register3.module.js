import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Register3PageRoutingModule } from './register3-routing.module';
import { Register3Page } from './register3.page';
let Register3PageModule = class Register3PageModule {
};
Register3PageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            Register3PageRoutingModule,
            ReactiveFormsModule
        ],
        declarations: [Register3Page]
    })
], Register3PageModule);
export { Register3PageModule };
//# sourceMappingURL=register3.module.js.map