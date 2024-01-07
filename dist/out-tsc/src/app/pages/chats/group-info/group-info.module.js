import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GroupInfoPageRoutingModule } from './group-info-routing.module';
import { GroupInfoPage } from './group-info.page';
import { ComponentsModule } from "../../../components/components.module";
export let GroupInfoPageModule = class GroupInfoPageModule {
};
GroupInfoPageModule = __decorate([
    NgModule({
        declarations: [GroupInfoPage],
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            GroupInfoPageRoutingModule,
            ComponentsModule
        ]
    })
], GroupInfoPageModule);
//# sourceMappingURL=group-info.module.js.map