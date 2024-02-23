import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthApiService } from "src/app/auth/auth-api.service";
import { map } from 'rxjs/operators';

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
  imgForm!: FormGroup;

  constructor(
    private apiService: AuthApiService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.fetchProfileImages();
    this.imgForm = this.fb.group({
      customImg: [""],
    });
  }

  onChange() {
    const value = this.imgForm.get("customImg")?.value;
    if (value) {
      this.fetchProfileImgByName(value);
    }
  }

  fetchProfileImages() {
    this.apiService.getProfileImages().subscribe(
      (response) => {
        this.profileImages = response;
        if (this.profileImages) {
          console.log(this.profileImages);
          this.selectedProfileImage = this.profileImages[0];
        }
      },
      (error) => {}
    );
  }

  fetchProfileImgByName(name: string) {
    this.apiService.getProfileImgByName(name).pipe(
      map((response) => {
        console.log(response);
        this.profileImages = response;
        if (this.profileImages) {
          console.log(this.profileImages);
          this.selectedProfileImage = this.profileImages[0];
        }
      })
    ).subscribe();
  }

  selectProfileImage(image: string) {
    this.selectedProfileImage = image;
  }

  updateValue(privacyVariable: any) {
    const id = this.apiService.getUserIdFromToken();
    if (id) {
      switch (privacyVariable.label) {
        case "Name":
          this.apiService
            .updateNamePrivacyStatusById(id, privacyVariable.visible)
            .subscribe(
              () => {},
              (error) => {}
            );
          break;
        case "Leeftijd":
          this.apiService
            .updateAgePrivacyStatusById(id, privacyVariable.visible)
            .subscribe(
              () => {},
              (error) => {}
            );
          break;
        case "Geslacht":
          this.apiService
            .updateGenderPrivacyStatusById(id, privacyVariable.visible)
            .subscribe(
              () => {},
              (error) => {}
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
              (error) => {}
            );
          },
          (error) => {}
        );
    }
  }
}
