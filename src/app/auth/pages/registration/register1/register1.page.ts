import { Component, ViewChild } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  NgForm,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { RegistrationService } from "../../../../auth/registration.service";
import { LoadingPage } from "src/app/shared/overlays/loading/loading.page";
import { AuthApiService } from "src/app/auth/auth-api.service";
import { Observable, map, catchError, of } from "rxjs";

@Component({
  selector: "app-register1",
  templateUrl: "./register1.page.html",
  styleUrls: ["./register1.page.scss"],
})
export class Register1Page {
  formData: any = {};
  registrationForm: FormGroup;
  userName!: string;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private registrationService: RegistrationService,
    private modalController: ModalController,
    private apiService: AuthApiService
  ) {
    this.registrationForm = this.formBuilder.group({
      name: ["", Validators.required],
      chosen: ["", Validators.required],
      username: [
        "",
        [Validators.required],
        [this.userNameValidator.bind(this)],
      ],
    });
  }

  userNameValidator(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    const username = control.value;

    return this.apiService.checkUserNameAvailable(username).pipe(
      map((isAvailable: boolean) => {
        return isAvailable ? null : { usernameTaken: true };
      }),
      catchError(() => {
        return of({ usernameTaken: true });
      })
    );
  }

  getUser() {
    this.apiService.getAllUsers().subscribe((response) => {
      if (response && response.length > 0) {
        this.userName = response[0].email;
      }
    });
  }

  async goToNextStep() {
    const loading = await this.modalController.create({
      component: LoadingPage,
    });
    await loading.present();
    if (this.registrationForm.valid) {
      this.registrationService.registrationData = {
        ...this.registrationService.registrationData,
        ...this.registrationForm.value,
      };

      await loading.dismiss();
      this.navCtrl.navigateForward("/register2");
    } else {
      await loading.dismiss();
    }
  }

  goBack() {
    this.navCtrl.navigateBack("/");
  }
}
