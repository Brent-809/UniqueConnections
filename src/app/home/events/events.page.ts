import { Component, OnInit } from "@angular/core";
import { HomeApiService } from "../home-api.service";
import "iconify-icon";
import { EventsApiService } from "../events-api.service";
import { Events } from "src/app/shared/interfaces/events.interface";
import { ModalController } from "@ionic/angular";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-events",
  templateUrl: "./events.page.html",
  styleUrls: ["./events.page.scss"],
})
export class EventsPage implements OnInit {
  userId!: string | undefined;
  admin!: boolean;
  creator!: boolean;
  presentingElement: any;
  events: Events[] = [];
  createCategoryForm!: FormGroup;
  categories: any[] = [];

  constructor(
    private apiService: HomeApiService,
    private eventsService: EventsApiService,
    private modalController: ModalController
  ) {}

  async ngOnInit() {
    this.getUserId();
    this.checkValues();
    await this.getAllEventCategories();
    this.getAllEvents();
    this.presentingElement = document.querySelector(".ion-page");
    this.createCategoryForm = new FormGroup({
      title: new FormControl("", [
        Validators.required,
        Validators.maxLength(7),
      ]),
      icon: new FormControl("", Validators.required),
    });
  }

  checkValues() {
    this.apiService.getUserById(this.userId).subscribe((response: any) => {
      this.admin = response.isAdmin === true;
      this.creator = response.isCreator;
    });
  }

  getAllEvents() {
    this.eventsService.getAllEvents().subscribe((response) => {
      this.events = response;
    });
  }

  async getAllEventCategories() {
    this.eventsService.getCategories().subscribe((response) => {
      this.categories = response.map((category: any) => ({
        icon: category.icon,
        title: category.title,
      }));
    });
  }

  getUserId() {
    this.userId = this.apiService.getUserIdFromToken();
  }

  createCategory() {
    this.eventsService
      .createCategory(this.createCategoryForm.value)
      .subscribe(() => {
        this.ngOnInit();
        this.modalController.dismiss();
      });
  }
}
