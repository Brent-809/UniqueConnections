import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { MessagesPageRoutingModule } from "./messages-routing.module";
import { MessagesPage } from "./messages.page";
import { GroupSearchComponent } from "../../../shared/components/group-search/group-search.component";
import { ComponentsModule } from "../../../shared/components/components.module";
let MessagesPageModule = class MessagesPageModule {
};
MessagesPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            MessagesPageRoutingModule,
            ComponentsModule,
        ],
        declarations: [MessagesPage, GroupSearchComponent],
    })
], MessagesPageModule);
export { MessagesPageModule };
//# sourceMappingURL=messages.module.js.map