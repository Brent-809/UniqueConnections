import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
export let CommentItemComponent = class CommentItemComponent {
    constructor() {
        this.isActive = false;
    }
    ngOnInit() { }
};
__decorate([
    Input()
], CommentItemComponent.prototype, "comment", void 0);
__decorate([
    Input()
], CommentItemComponent.prototype, "light", void 0);
CommentItemComponent = __decorate([
    Component({
        selector: 'app-comment-item',
        templateUrl: './comment-item.component.html',
        styleUrls: ['./comment-item.component.scss'],
    })
], CommentItemComponent);
//# sourceMappingURL=comment-item.component.js.map