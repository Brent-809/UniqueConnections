// newuser3.page.ts
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthApiService } from "src/app/auth/auth-api.service";

@Component({
  selector: "app-newuser3",
  templateUrl: "./newuser3.page.html",
  styleUrls: ["./newuser3.page.scss"],
})
export class Newuser3Page implements OnInit {
  profileImages!: string;
  selectedProfileImage: string | undefined;
  privacyVariables = [
    { label: "Name", visible: true },
    { label: "Age", visible: true },
    { label: "Gender", visible: true },
  ];

  constructor(private apiService: AuthApiService, private router: Router) {}

  ngOnInit(): void {
    this.fetchProfileImages();
  }

  fetchProfileImages() {
    this.apiService.getProfileImages().subscribe(
      (response) => {
        this.profileImages = response;
        if (this.profileImages) {
          this.selectedProfileImage = this.profileImages[0];
        }
      },
      (error) => {
      }
    );
  }

  selectProfileImage(image: string) {
    this.selectedProfileImage = image;
  }

  updateValue(privacyVariable: any) {
    const id = this.apiService.getUserIdFromToken();
    if (id) {
      switch (privacyVariable.label) {
        case "Wettelijke Naam":
          this.apiService
            .updateNamePrivacyStatusById(id, privacyVariable.visible)
            .subscribe(
              () => {
              },
              (error) => {
              }
            );
          break;
        case "Leeftijd":
          this.apiService
            .updateAgePrivacyStatusById(id, privacyVariable.visible)
            .subscribe(
              () => {
              },
              (error) => {
              }
            );
          break;
        case "Geslacht":
          this.apiService
            .updateGenderPrivacyStatusById(id, privacyVariable.visible)
            .subscribe(
              () => {
              },
              (error) => {
              }
            );
          break;
        case "Seksualiteit":
          this.apiService
            .updateSexualityPrivacyStatusById(id, privacyVariable.visible)
            .subscribe(
              () => {
              },
              (error) => {
              }
            );
          break;
        case "Ontwikkelingsstoornis":
          this.apiService
            .updateDisorderPrivacyStatusById(id, privacyVariable.visible)
            .subscribe(
              () => {
              },
              (error) => {
              }
            );
          break;
        default:
      }
    } else {
    }
  }

  finish() {
    const id = this.apiService.getUserIdFromToken();
    if (id && this.selectedProfileImage) {
      this.apiService
        .selectProfileImage(id, this.selectedProfileImage)
        .subscribe(
          () => {
            // Now, update the privacy settings
            this.apiService.updateNewUserStatus(id).subscribe(
              () => {
                this.router.navigateByUrl("/");
              },
              (error) => {
              }
            );
          },
          (error) => {
          }
        );
    }
  }
}
