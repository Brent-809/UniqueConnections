import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    isAuthenticated() {
        const token = localStorage.getItem('token');
        if (!token) {
            return false;
        }
        // Check if the token is expired
        const decodedToken = jwt_decode(token);
        const now = Date.now().valueOf() / 1000;
        if (decodedToken.exp < now) {
            return false;
        }
        return true;
    }
};
AuthService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map