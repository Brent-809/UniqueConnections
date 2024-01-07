import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let WelcomePage = class WelcomePage {
    constructor(router) {
        this.router = router;
        this.background = {
            backgroundImage: 'url(https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80)'
        };
    }
    ngOnInit() {
    }
    goToLogin() {
        this.router.navigate(['/login']);
    }
    goToRegister() {
        this.router.navigate(['/register']);
    }
};
WelcomePage = __decorate([
    Component({
        selector: 'app-welcome',
        templateUrl: './welcome.page.html',
        styleUrls: ['./welcome.page.scss'],
    })
], WelcomePage);
//# sourceMappingURL=welcome.page.js.map