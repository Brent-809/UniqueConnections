import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthApiService } from "src/app/auth/auth-api.service";
import { Geolocation } from "@capacitor/geolocation";

@Component({
  selector: "app-newuser2",
  templateUrl: "./newuser2.page.html",
  styleUrls: ["./newuser2.page.scss"],
})
export class Newuser2Page implements OnInit {
  disorderDisable: boolean = false;
  developmentalDisorder: string = ""; // ngModel bound property
  isdisorderSubmitted: boolean = false;
  selectedSexuality!: string;
  sexualityDisable: boolean = false;
  isSexualitySubmitted: boolean = false;
  newUserForm!: FormGroup;
  city!: string;

  constructor(
    private apiService: AuthApiService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.newUserForm = this.formBuilder.group({
      developmentalDisorder: ["", Validators.required],
    });
    this.getGeoLocation();
  }

  async getGeoLocation() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.apiService
      .getGeoLocation(coordinates.coords.latitude, coordinates.coords.longitude)
      .subscribe((response) => {
        this.city = response.city;
        console.log(this.city);
      });
  }

  saveLocation() {
    const userId = this.apiService.getUserIdFromToken();
    const location = this.city;
    if (userId) {
      this.apiService
        .updateUserLocation(userId, this.city)
        .subscribe((response: any) => {
          if (response.id && response.location === location) {
            this.disorderDisable = true;
            this.isdisorderSubmitted = true;
          }
        });
      this.router.navigateByUrl("/newuser3");
    }
  }

  isFormSubmitted(): boolean {
    return this.isdisorderSubmitted && this.isSexualitySubmitted;
  }
}
