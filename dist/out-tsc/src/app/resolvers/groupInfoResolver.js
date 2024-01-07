import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
export let GroupInfoResolver = class GroupInfoResolver {
    constructor(apiService) {
        this.apiService = apiService;
    }
    resolve(route, state) {
        const groupId = route.params['id'];
    }
};
GroupInfoResolver = __decorate([
    Injectable({
        providedIn: 'root'
    })
], GroupInfoResolver);
//# sourceMappingURL=groupInfoResolver.js.map