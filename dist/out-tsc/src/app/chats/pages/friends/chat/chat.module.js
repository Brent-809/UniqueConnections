import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChatPageRoutingModule } from './chat-routing.module';
import { ChatPage } from './chat.page';
let ChatPageModule = class ChatPageModule {
};
ChatPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ChatPageRoutingModule,
            ReactiveFormsModule
        ],
        declarations: [ChatPage]
    })
], ChatPageModule);
export { ChatPageModule };
//# sourceMappingURL=chat.module.js.map