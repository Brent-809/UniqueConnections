import { Component, OnInit } from "@angular/core";
import { HomeApiService } from "../home-api.service";
import "iconify-icon";
import { EventsApiService } from "../events-api.service";
import { Events } from "src/app/shared/interfaces/events.interface";

@Component({
  selector: "app-events",
  templateUrl: "./events.page.html",
  styleUrls: ["./events.page.scss"],
})
export class EventsPage implements OnInit {
  userId!: string | undefined;
  admin!: boolean;
  events: Events[] = [];

  categories: any[] = [
    { name: "Concerten", icon: "fluent-emoji-flat:guitar" },
    { name: "YouTube", icon: "logos:youtube-icon" },
    { name: "Lgtbq+", icon: "twemoji:rainbow-flag" },
    { name: "Films", icon: "ic:round-movie" },
  ];

  constructor(
    private apiService: HomeApiService,
    private eventsService: EventsApiService
  ) {}

  ngOnInit() {
    this.getUserId();
    this.checkIsAdmin();
    this.getAllEvents();
  }

  checkIsAdmin() {
    this.apiService.getUserById(this.userId).subscribe((response: any) => {
      if (response.isAdmin === true) {
        this.admin = true;
      }
    });
  }

  getAllEvents() {
    this.eventsService.getAllEvents().subscribe((response) => {
      this.events = response;
    });
  }

  getUserId() {
    this.userId = this.apiService.getUserIdFromToken();
  }
}
