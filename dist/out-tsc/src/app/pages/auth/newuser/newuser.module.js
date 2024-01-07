import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NewuserPageRoutingModule } from './newuser-routing.module';
import { NewuserPage } from './newuser.page';
export let NewuserPageModule = class NewuserPageModule {
};
NewuserPageModule = __decorate([
    NgModule({
        imports: [CommonModule, FormsModule, IonicModule, NewuserPageRoutingModule],
        declarations: [NewuserPage],
    })
], NewuserPageModule);
//# sourceMappingURL=newuser.module.js.map