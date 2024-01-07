import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HumanizePipe } from './humanize.pipe';
export let UtilsModule = class UtilsModule {
};
UtilsModule = __decorate([
    NgModule({
        declarations: [HumanizePipe],
        imports: [
            CommonModule
        ],
        exports: [
            HumanizePipe
        ]
    })
], UtilsModule);
//# sourceMappingURL=utils.module.js.map