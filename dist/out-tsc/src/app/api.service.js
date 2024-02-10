import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import OneSignal from "onesignal-cordova-plugin";
let ApiService = class ApiService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = environment.onesignalApi;
        const token = localStorage.getItem("token");
        if (token) {
            this.token = token;
        }
    }
    sendMessageNotification(message, profileImg) {
        const apiKey = environment.onesignalKey;
        const appId = environment.onesignal;
        const currentUserSubscriptionId = OneSignal.User.pushSubscription.id;
        const notificationBody = {
            contents: { en: message },
            app_id: appId,
            included_segments: ["Total Subscriptions"],
            excluded_segments: [currentUserSubscriptionId],
            app_url: "UniqueConnections://tabs/explore",
            large_icon: "https://uniqueconnections.be/images/notiflogo.png",
        };
        console.log("Notification Body:", notificationBody); // Log the notification body
        this.http
            .post(`${this.baseUrl}/notifications`, notificationBody)
            .subscribe((response) => {
            console.log("Notification Sent Successfully:", response);
        }, (error) => {
            console.error("Error Sending Notification:", error);
        });
    }
};
ApiService = __decorate([
    Injectable({
        providedIn: "root",
    })
], ApiService);
export { ApiService };
//# sourceMappingURL=api.service.js.map