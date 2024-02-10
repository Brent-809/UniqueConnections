import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let GroupCardComponent = class GroupCardComponent {
    constructor() { }
    ngOnInit() { }
};
__decorate([
    Input()
], GroupCardComponent.prototype, "id", void 0);
__decorate([
    Input()
], GroupCardComponent.prototype, "image", void 0);
__decorate([
    Input()
], GroupCardComponent.prototype, "members", void 0);
__decorate([
    Input()
], GroupCardComponent.prototype, "name", void 0);
GroupCardComponent = __decorate([
    Component({
        selector: 'app-group-card',
        templateUrl: './group-card.component.html',
        styleUrls: ['./group-card.component.scss'],
    })
], GroupCardComponent);
export { GroupCardComponent };
//# sourceMappingURL=group-card.component.js.map