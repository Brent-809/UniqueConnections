import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthApiService } from "src/app/auth/auth-api.service";

@Component({
  selector: "app-newuser1",
  templateUrl: "./newuser1.page.html",
  styleUrls: ["./newuser1.page.scss"],
})
export class Newuser1Page implements OnInit {
  age: any = 13;
  newUserForm!: FormGroup;
  ageDisable: boolean = false;
  bioDisable: boolean = false;
  bio: string = ""; // ngModel bound property
  currentBioLength: number = 0; // track current bio length
  maxLength: number = 150; // maximum allowed bio length
  isAgeSubmitted: boolean = false;
  isBioSubmitted: boolean = false;

  updateBioLength() {
    this.currentBioLength = this.bio.length;

    // Truncate the input if it exceeds the maximum length
    if (this.bio.length > this.maxLength) {
      this.bio = this.bio.substr(0, this.maxLength);
    }
  }

  constructor(
    private apiService: AuthApiService,
    private router: Router,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.newUserForm = this.formBuilder.group({
      age: 13,
      bio: [""],
    });
  }

  saveBioAndAge() {
    const userId = this.apiService.getUserIdFromToken();
    const bio = this.newUserForm.value.bio;
    const age = this.age;

    if (userId) {
      this.apiService.updateUserBio(userId, bio).subscribe((response: any) => {
        if (response.id && response.bio === bio) {
          this.bioDisable = true;
          this.isBioSubmitted = true;
        }
      });
      this.apiService
        .updateUserAge(userId, this.age)
        .subscribe((response: any) => {
          if (response.id && response.age === age) {
            this.ageDisable = true;
            this.isAgeSubmitted = true;
          }
        });
      this.router.navigateByUrl("/newuser3");
    }
  }

  isFormSubmitted(): boolean {
    return this.isAgeSubmitted && this.isBioSubmitted;
  }

  bioEnable() {
    this.bioDisable = false;
    this.bio = "";
    this.currentBioLength = 0;
  }
}
