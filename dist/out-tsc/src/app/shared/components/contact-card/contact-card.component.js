import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let ContactCardComponent = class ContactCardComponent {
    constructor() { }
    ngOnInit() { }
};
__decorate([
    Input()
], ContactCardComponent.prototype, "image", void 0);
__decorate([
    Input()
], ContactCardComponent.prototype, "name", void 0);
__decorate([
    Input()
], ContactCardComponent.prototype, "isActive", void 0);
ContactCardComponent = __decorate([
    Component({
        selector: 'app-contact-card',
        templateUrl: './contact-card.component.html',
        styleUrls: ['./contact-card.component.scss'],
    })
], ContactCardComponent);
export { ContactCardComponent };
//# sourceMappingURL=contact-card.component.js.map