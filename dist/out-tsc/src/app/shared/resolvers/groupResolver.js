import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
let GroupResolver = class GroupResolver {
    constructor() { }
    resolve(route, state) {
        const groupId = route.params["id"];
    }
};
GroupResolver = __decorate([
    Injectable({
        providedIn: "root",
    })
], GroupResolver);
export { GroupResolver };
//# sourceMappingURL=groupResolver.js.map