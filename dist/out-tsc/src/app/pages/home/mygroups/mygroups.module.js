import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MygroupsPageRoutingModule } from './mygroups-routing.module';
import { MygroupsPage } from './mygroups.page';
export let MygroupsPageModule = class MygroupsPageModule {
};
MygroupsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            MygroupsPageRoutingModule
        ],
        declarations: [MygroupsPage]
    })
], MygroupsPageModule);
//# sourceMappingURL=mygroups.module.js.map