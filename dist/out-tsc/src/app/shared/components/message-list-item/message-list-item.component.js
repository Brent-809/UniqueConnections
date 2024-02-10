import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let MessageListItemComponent = class MessageListItemComponent {
    constructor() { }
    ngOnInit() { }
};
__decorate([
    Input()
], MessageListItemComponent.prototype, "avatar", void 0);
__decorate([
    Input()
], MessageListItemComponent.prototype, "active", void 0);
__decorate([
    Input()
], MessageListItemComponent.prototype, "user", void 0);
__decorate([
    Input()
], MessageListItemComponent.prototype, "message", void 0);
__decorate([
    Input()
], MessageListItemComponent.prototype, "time", void 0);
__decorate([
    Input()
], MessageListItemComponent.prototype, "messageCount", void 0);
MessageListItemComponent = __decorate([
    Component({
        selector: 'app-message-list-item',
        templateUrl: './message-list-item.component.html',
        styleUrls: ['./message-list-item.component.scss'],
    })
], MessageListItemComponent);
export { MessageListItemComponent };
//# sourceMappingURL=message-list-item.component.js.map