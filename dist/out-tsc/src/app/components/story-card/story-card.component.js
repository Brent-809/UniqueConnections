import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
export let StoryCardComponent = class StoryCardComponent {
    constructor() { }
    ngOnInit() { }
};
__decorate([
    Input()
], StoryCardComponent.prototype, "id", void 0);
__decorate([
    Input()
], StoryCardComponent.prototype, "image", void 0);
__decorate([
    Input()
], StoryCardComponent.prototype, "members", void 0);
__decorate([
    Input()
], StoryCardComponent.prototype, "name", void 0);
StoryCardComponent = __decorate([
    Component({
        selector: 'app-story-card',
        templateUrl: './story-card.component.html',
        styleUrls: ['./story-card.component.scss'],
    })
], StoryCardComponent);
//# sourceMappingURL=story-card.component.js.map