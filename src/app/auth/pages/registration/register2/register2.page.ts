import { Component, OnInit, ViewChild } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { RegistrationService } from "../../../../auth/registration.service";
import { LoadingPage } from "src/app/shared/overlays/loading/loading.page";
import { emailValidator } from "src/app/shared/validators/email.validators";
import { AuthApiService } from "src/app/auth/auth-api.service";

@Component({
  selector: "app-register2",
  templateUrl: "./register2.page.html",
  styleUrls: ["./register2.page.scss"],
})
export class Register2Page implements OnInit {
  formData: any = {};
  registrationForm: FormGroup;
  userEmail!: string;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private registrationService: RegistrationService,
    private modalController: ModalController,
    private apiService: AuthApiService
  ) {
    this.registrationForm = this.formBuilder.group({
      email: [null, [Validators.required, emailValidator]],
    });
  }

  ngOnInit() {
    this.getEmail();
  }

  getEmail() {
    this.apiService.getAllUsers().subscribe((response) => {
      if (response && response.length > 0) {
        this.userEmail = response[0].email;
      }
    });
  }

  async goToNextStep() {
    const loading = await this.modalController.create({
      component: LoadingPage,
    });
    await loading.present();

    const email = this.registrationForm.value.email.toLowerCase(); // Convert email to lowercase

    if (this.userEmail === email) {
      console.error("User already exists");
      await loading.dismiss();
      return;
    }

    if (this.registrationForm.valid) {
      // Update the email property in the registrationData object
      this.registrationService.registrationData = {
        ...this.registrationService.registrationData,
        email: email,
      };

      this.registrationService.pageNumber = 2;

      await loading.dismiss();
      this.navCtrl.navigateForward("/register3");
    } else {
      await loading.dismiss();
    }
  }

  goBack() {
    this.navCtrl.navigateBack("/");
  }
}
