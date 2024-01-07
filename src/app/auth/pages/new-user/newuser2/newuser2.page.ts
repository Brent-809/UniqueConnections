import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthApiService } from "src/app/auth/auth-api.service";

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

  constructor(
    private apiService: AuthApiService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.newUserForm = this.formBuilder.group({
      developmentalDisorder: ["", Validators.required],
      selectedSexuality: ["", Validators.required],
    });
  }

  savedisorder() {
    const userId = this.apiService.getUserIdFromToken();
    const developmentalDisorder = this.developmentalDisorder;
    if (userId) {
      this.apiService
        .updateUserDisorder(userId, this.developmentalDisorder)
        .subscribe((response: any) => {
          if (
            response.id &&
            response.developmentalDisorder === developmentalDisorder
          ) {
            this.disorderDisable = true;
            this.isdisorderSubmitted = true;
          }
        });
    }
  }

  isFormSubmitted(): boolean {
    return this.isdisorderSubmitted && this.isSexualitySubmitted;
  }

  disorderEnable() {
    this.disorderDisable = false;
    this.developmentalDisorder = "";
  }

  SeksualiteitEnable() {
    this.sexualityDisable = false;
  }

  SaveSeksualiteitAndDisorder() {
    const userId = this.apiService.getUserIdFromToken();
    const developmentalDisorder = this.developmentalDisorder;
    const selectedSexuality = this.selectedSexuality;
    if (userId) {
      this.apiService
        .updateUserSexuality(userId, this.newUserForm.value.selectedSexuality)
        .subscribe((response: any) => {
          if (response.id && response.sexuality === selectedSexuality) {
          }
        });
      this.apiService
        .updateUserDisorder(
          userId,
          this.newUserForm.value.developmentalDisorder
        )
        .subscribe((response: any) => {
          if (
            response.id &&
            response.developmentalDisorder === developmentalDisorder
          ) {
          }
        });
      this.router.navigateByUrl("/newuser3");
    }
  }

  GoToNextStep() {
    this.router.navigateByUrl("/newuser3");
  }
}
