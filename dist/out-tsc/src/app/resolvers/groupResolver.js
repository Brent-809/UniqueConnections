import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
export let GroupResolver = class GroupResolver {
    constructor(apiService) {
        this.apiService = apiService;
    }
    resolve(route, state) {
        const groupId = route.params['id'];
    }
};
GroupResolver = __decorate([
    Injectable({
        providedIn: 'root'
    })
], GroupResolver);
//# sourceMappingURL=groupResolver.js.map