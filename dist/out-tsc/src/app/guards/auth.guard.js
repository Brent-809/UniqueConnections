import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
export let AuthGuard = class AuthGuard {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
    }
    canActivate() {
        if (this.apiService.isLoggedIn()) {
            return true;
        }
        else {
            console.log('AuthGuard: User is not logged in. Redirecting to /welcome');
            this.router.navigate(['/welcome']);
            return false;
        }
    }
};
AuthGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthGuard);
//# sourceMappingURL=auth.guard.js.map