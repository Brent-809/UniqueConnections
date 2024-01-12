import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "../environments/environment";
import OneSignal from "onesignal-cordova-plugin";
import { Platform } from "@ionic/angular";
import { ChatService } from "./chats/chat.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  showSplash = true;
  groupId!: any;
  currentUserSubscriptionId!: string;
  messages: any[] = [];

  constructor(
    public router: Router,
    private http: HttpClient,
    private platform: Platform,
    private chatService: ChatService
  ) {
    platform.ready().then(() => {
      if (this.platform.is("mobile")) {
        if (this.platform.is("android")) {
          if (this.platform.is("mobileweb")) {
          } else {
            OneSignal.initialize(environment.onesignal);
            OneSignal.Notifications.requestPermission(true).then(
              (accepted: boolean) => {
                OneSignal.setConsentGiven(true);
              }
            );
          }
        }
      }
    });
  }

  async ngOnInit(): Promise<void> {
    setTimeout(() => {
      this.makeRequest();
      this.showSplash = false;
    }, 3000);
  }

  listenForMessages(): void {
    this.chatService.getNewMessage().subscribe((message) => {
      if (message.groupId === this.groupId) {
        this.messages.push(message);
      }
    });
  }

  makeRequest() {
    const apiUrl = environment.apiUrl;
    this.http.get(apiUrl).subscribe(
      () => {}
      // (error) => {
      //   console.error(error);
      //   this.router.navigateByUrl("/error");
      // }
    );
  }
}
