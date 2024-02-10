import { __decorate, __param } from "tslib";
import { isPlatformServer } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { Subject } from 'rxjs';
import { confetti } from 'tsparticles-confetti';
let ConfettiComponent = class ConfettiComponent {
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
        (async () => {
            if (this.fire) {
                this.container = await confetti(this.id, this.options);
            }
        })();
    }
    ngOnChanges(changes) {
        if (isPlatformServer(this.platformId)) {
            return;
        }
        const fireChanges = changes['fire'];
        if (this.fire &&
            fireChanges &&
            fireChanges.previousValue !== fireChanges.currentValue) {
            (async () => {
                this.container = await confetti(this.id, this.options);
            })();
        }
    }
    ngOnDestroy() {
        this.container?.destroy();
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
export { ConfettiComponent };
//# sourceMappingURL=confetti.component.js.map