import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreateGroupPageRoutingModule } from './create-group-routing.module';
import { CreateGroupPage } from './create-group.page';
export let CreateGroupPageModule = class CreateGroupPageModule {
};
CreateGroupPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            CreateGroupPageRoutingModule
        ],
        declarations: [CreateGroupPage]
    })
], CreateGroupPageModule);
//# sourceMappingURL=create-group.module.js.map