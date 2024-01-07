import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
export let StoryAvatarComponent = class StoryAvatarComponent {
    constructor() { }
    ngOnInit() { }
    setActive() {
    }
};
__decorate([
    Input()
], StoryAvatarComponent.prototype, "avatar", void 0);
__decorate([
    Input()
], StoryAvatarComponent.prototype, "name", void 0);
__decorate([
    Input()
], StoryAvatarComponent.prototype, "live", void 0);
__decorate([
    Input()
], StoryAvatarComponent.prototype, "active", void 0);
StoryAvatarComponent = __decorate([
    Component({
        selector: 'app-story-avatar',
        templateUrl: './story-avatar.component.html',
        styleUrls: ['./story-avatar.component.scss'],
    })
], StoryAvatarComponent);
//# sourceMappingURL=story-avatar.component.js.map