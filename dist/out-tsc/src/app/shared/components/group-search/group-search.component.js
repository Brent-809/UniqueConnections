import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let GroupSearchComponent = class GroupSearchComponent {
    constructor() {
        this.joinedGroups = [];
        this.filteredGroups = [];
        this.searchQuery = '';
    }
    applySearchFilter() {
        const lowercaseQuery = this.searchQuery.toLowerCase();
        this.filteredGroups = this.joinedGroups.filter(group => group.name.toLowerCase().includes(lowercaseQuery));
    }
};
__decorate([
    Input()
], GroupSearchComponent.prototype, "joinedGroups", void 0);
GroupSearchComponent = __decorate([
    Component({
        selector: 'app-group-search',
        templateUrl: './group-search.component.html',
        styleUrls: ['./group-search.component.scss'],
    })
], GroupSearchComponent);
export { GroupSearchComponent };
//# sourceMappingURL=group-search.component.js.map