import { Component, OnInit } from "@angular/core";
import { HomeApiService } from "../home-api.service";
import "iconify-icon";

@Component({
  selector: "app-events",
  templateUrl: "./events.page.html",
  styleUrls: ["./events.page.scss"],
})
export class EventsPage implements OnInit {
  userId!: string | undefined;
  admin!: boolean;
  events: any[] = [
    {
      name: "Halloween Party",
      image:
        "https://images.unsplash.com/photo-1477516561410-f0b5dd8319e4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=350&q=80",
      date: "Oct 25",
      from: "11:00",
      to: "2:00",
      location: "4th Avenue, High Hills",
      description:
        "An event description is copy that aims to tell your potential attendees what will be happening at the event, who will be speaking, and what they will get out of attending. Good event descriptions can drive attendance to events and also lead to more media coverage",
      attend: {
        avatars: [
          "https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80",
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80",
          "https://images.unsplash.com/photo-1556637641-0ac7101023f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80",
          "https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80",
        ],
        total: 126,
      },
    },
    {
      name: "ABGT House Party",
      image:
        "https://images.unsplash.com/photo-1553190842-24c3f93ba116?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=350&q=80",
      date: "Dec 10",
      from: "09:00",
      to: "04:00",
      location: "Evro Boulevar, St,. Louis",
      description:
        "An event description is copy that aims to tell your potential attendees what will be happening at the event, who will be speaking, and what they will get out of attending. Good event descriptions can drive attendance to events and also lead to more media coverage",
      attend: {
        avatars: [
          "https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80",
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80",
          "https://images.unsplash.com/photo-1556637641-0ac7101023f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80",
          "https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80",
        ],
        total: 321,
      },
    },
    {
      name: "Tomorrowland 21",
      image:
        "https://images.unsplash.com/photo-1577045629710-8e0bd30c1a03?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=350&q=80",
      date: "Jan 25",
      from: "11:00",
      to: "2:00",
      location: "Ratwater St. 111, New Orleans",
      description:
        "An event description is copy that aims to tell your potential attendees what will be happening at the event, who will be speaking, and what they will get out of attending. Good event descriptions can drive attendance to events and also lead to more media coverage",
      attend: {
        avatars: [
          "https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80",
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80",
          "https://images.unsplash.com/photo-1556637641-0ac7101023f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80",
          "https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80",
        ],
        total: 126,
      },
    },
    {
      name: "Museum Night Gala",
      image:
        "https://images.unsplash.com/photo-1544213456-bc37cb97df74?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=350&q=80",
      date: "Feb 09",
      from: "11:00",
      to: "12:30",
      location: "Madison Ave. 1100, NYC",
      description:
        "An event description is copy that aims to tell your potential attendees what will be happening at the event, who will be speaking, and what they will get out of attending. Good event descriptions can drive attendance to events and also lead to more media coverage",
      attend: {
        avatars: [
          "https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80",
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80",
          "https://images.unsplash.com/photo-1556637641-0ac7101023f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80",
          "https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=124&q=80",
        ],
        total: 50,
      },
    },
  ];

  categories: any[] = [
    { name: "Concerten", icon: "fluent-emoji-flat:guitar" },
    { name: "YouTube", icon: "logos:youtube-icon" },
    { name: "Lgtbq+", icon: "twemoji:rainbow-flag" },
    { name: "Films", icon: "ic:round-movie" },
  ];

  constructor(private apiService: HomeApiService) {}

  ngOnInit() {
    this.getUserId();
    this.checkIsAdmin();
  }

  checkIsAdmin() {
    this.apiService.getUserById(this.userId).subscribe((response: any) => {
      console.log(response);
      if (response.isAdmin === true) {
        this.admin = true;
      }
    });
  }

  getUserId() {
    this.userId = this.apiService.getUserIdFromToken();
  }
}
