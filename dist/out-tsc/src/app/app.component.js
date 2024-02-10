import { __decorate } from "tslib";
import { Component } from "@angular/core";
import { environment } from "../environments/environment";
import OneSignal from "onesignal-cordova-plugin";
let AppComponent = class AppComponent {
    constructor(router, http, platform, chatService) {
        this.router = router;
        this.http = http;
        this.platform = platform;
        this.chatService = chatService;
        this.showSplash = true;
        this.messages = [];
        platform.ready().then(() => {
            if (this.platform.is("mobile")) {
                if (this.platform.is("android")) {
                    if (this.platform.is("mobileweb")) {
                    }
                    else {
                        OneSignal.initialize(environment.onesignal);
                        OneSignal.Notifications.requestPermission(true).then((accepted) => {
                            OneSignal.setConsentGiven(true);
                        });
                    }
                }
            }
        });
    }
    async ngOnInit() {
        setTimeout(() => {
            this.makeRequest();
            this.showSplash = false;
        }, 3000);
    }
    listenForMessages() {
        this.chatService.getNewMessage().subscribe((message) => {
            if (message.groupId === this.groupId) {
                this.messages.push(message);
            }
        });
    }
    makeRequest() {
        const apiUrl = environment.apiUrl;
        this.http.get(apiUrl).subscribe(() => { }
        // (error) => {
        //   console.error(error);
        //   this.router.navigateByUrl("/error");
        // }
        );
    }
};
AppComponent = __decorate([
    Component({
        selector: "app-root",
        templateUrl: "app.component.html",
        styleUrls: ["app.component.scss"],
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map