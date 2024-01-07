import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { MessagesPageRoutingModule } from "./messages-routing.module";
import { MessagesPage } from "./messages.page";
import { GroupSearchComponent } from "../../../components/group-search/group-search.component";
export let MessagesPageModule = class MessagesPageModule {
};
MessagesPageModule = __decorate([
    NgModule({
        imports: [CommonModule, FormsModule, IonicModule, MessagesPageRoutingModule],
        declarations: [MessagesPage, GroupSearchComponent],
    })
], MessagesPageModule);
//# sourceMappingURL=messages.module.js.map