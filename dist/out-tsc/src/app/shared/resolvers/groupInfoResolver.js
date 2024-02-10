import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
let GroupInfoResolver = class GroupInfoResolver {
    constructor() { }
    resolve(route, state) {
        const groupId = route.params["id"];
    }
};
GroupInfoResolver = __decorate([
    Injectable({
        providedIn: "root",
    })
], GroupInfoResolver);
export { GroupInfoResolver };
//# sourceMappingURL=groupInfoResolver.js.map