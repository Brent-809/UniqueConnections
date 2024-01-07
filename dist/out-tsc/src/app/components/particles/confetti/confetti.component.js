import { __awaiter, __decorate, __param } from "tslib";
import { isPlatformServer } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { Subject } from 'rxjs';
import { confetti } from 'tsparticles-confetti';
export let ConfettiComponent = class ConfettiComponent {
    constructor(platformId) {
        this.platformId = platformId;
        this.destroy$ = new Subject();
        this.id = 'tsparticles';
        this.fire = true;
    }
    ngAfterViewInit() {
        if (isPlatformServer(this.platformId)) {
            return;
        }
        (() => __awaiter(this, void 0, void 0, function* () {
            if (this.fire) {
                this.container = yield confetti(this.id, this.options);
            }
        }))();
    }
    ngOnChanges(changes) {
        if (isPlatformServer(this.platformId)) {
            return;
        }
        const fireChanges = changes['fire'];
        if (this.fire &&
            fireChanges &&
            fireChanges.previousValue !== fireChanges.currentValue) {
            (() => __awaiter(this, void 0, void 0, function* () {
                this.container = yield confetti(this.id, this.options);
            }))();
        }
    }
    ngOnDestroy() {
        var _a;
        (_a = this.container) === null || _a === void 0 ? void 0 : _a.destroy();
        this.destroy$.next();
    }
};
__decorate([
    Input()
], ConfettiComponent.prototype, "options", void 0);
__decorate([
    Input()
], ConfettiComponent.prototype, "id", void 0);
__decorate([
    Input()
], ConfettiComponent.prototype, "fire", void 0);
ConfettiComponent = __decorate([
    Component({
        selector: 'app-confetti',
        templateUrl: './confetti.component.html',
        styleUrls: ['./confetti.component.scss'],
    }),
    __param(0, Inject(PLATFORM_ID))
], ConfettiComponent);
//# sourceMappingURL=confetti.component.js.map