import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
let AuthGuard = class AuthGuard {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
    }
    canActivate() {
        if (this.apiService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(["/welcome"]);
            return false;
        }
    }
};
AuthGuard = __decorate([
    Injectable({
        providedIn: "root",
    })
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map