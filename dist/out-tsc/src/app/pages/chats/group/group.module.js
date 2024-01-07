import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GroupPageRoutingModule } from './group-routing.module';
import { GroupPage } from './group.page';
import { UtilsModule } from "../../../utils/utils.module";
import { DeleteConfirmationComponent } from "../../../components/delete-confirmation/delete-confirmation.component";
export let GroupPageModule = class GroupPageModule {
};
GroupPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            GroupPageRoutingModule,
            UtilsModule,
            ReactiveFormsModule,
        ],
        declarations: [GroupPage, DeleteConfirmationComponent]
    })
], GroupPageModule);
//# sourceMappingURL=group.module.js.map