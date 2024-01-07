import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "../environments/environment";
import OneSignal from "onesignal-cordova-plugin";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  baseUrl = environment.onesignalApi;
  token!: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    const token = localStorage.getItem("token");
    if (token) {
      this.token = token;
    }
  }

  sendMessageNotification(message: any, profileImg: string) {
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
      .subscribe(
        (response: any) => {
          console.log("Notification Sent Successfully:", response);
        },
        (error: any) => {
          console.error("Error Sending Notification:", error);
        }
      );
  }
}
