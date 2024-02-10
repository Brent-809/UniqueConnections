import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { GroupPageRoutingModule } from "./group-routing.module";
import { GroupPage } from "./group.page";
import { DeleteConfirmationComponent } from "../../../../shared/components/delete-confirmation/delete-confirmation.component";
let GroupPageModule = class GroupPageModule {
};
GroupPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            GroupPageRoutingModule,
            ReactiveFormsModule,
        ],
        declarations: [GroupPage, DeleteConfirmationComponent],
    })
], GroupPageModule);
export { GroupPageModule };
//# sourceMappingURL=group.module.js.map