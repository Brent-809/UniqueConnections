import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
export let NotificationItemComponent = class NotificationItemComponent {
    constructor() { }
    ngOnInit() { }
};
__decorate([
    Input()
], NotificationItemComponent.prototype, "avatar", void 0);
__decorate([
    Input()
], NotificationItemComponent.prototype, "username", void 0);
__decorate([
    Input()
], NotificationItemComponent.prototype, "message", void 0);
__decorate([
    Input()
], NotificationItemComponent.prototype, "time", void 0);
NotificationItemComponent = __decorate([
    Component({
        selector: 'app-notification-item',
        templateUrl: './notification-item.component.html',
        styleUrls: ['./notification-item.component.scss'],
    })
], NotificationItemComponent);
//# sourceMappingURL=notification-item.component.js.map