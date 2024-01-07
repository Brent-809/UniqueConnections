import { Component } from '@angular/core';
import {
  AlertController,
  ModalController,
  NavController,
} from '@ionic/angular';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RegistrationService } from '../../../../auth/registration.service';
import { LoadingPage } from 'src/app/shared/overlays/loading/loading.page';
import { passwordValidator } from 'src/app/shared/validators/password.validator';
import { Router } from '@angular/router';
import { AuthApiService } from 'src/app/auth/auth-api.service';

@Component({
  selector: 'app-register3',
  templateUrl: './register3.page.html',
  styleUrls: ['./register3.page.scss'],
})
export class Register3Page {
  formData: any = {};
  registrationForm: FormGroup;
  pwdIcon = 'eye-outline';
  pwdIcon2 = 'eye-outline';
  showPwd = false;
  showPwd2 = false;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private registrationService: RegistrationService,
    private modalController: ModalController,
    private alertController: AlertController,
    private apiService: AuthApiService,
    private router: Router
  ) {
    this.registrationForm = this.formBuilder.group(
      {
        password: [null, [Validators.required, passwordValidator]],
        cpassword: [null, [Validators.required, passwordValidator]],
      },
      {
        validator: this.passwordMatchValidator,
      }
    );
  }

  passwordMatchValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const password = control.get('password');
    const cpassword = control.get('cpassword');

    if (password && cpassword && password.value !== cpassword.value) {
      return { passwordMismatch: true };
    }

    return null;
  }

  async goToNextStep(user: any) {
    const loading = await this.modalController.create({
      component: LoadingPage,
    });
    await loading.present();

    if (user.password !== user.cpassword) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Wachtwoord en bevestig wachtwoord komen niet overeen.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    // Check if user.email is defined before converting to lowercase
    if (user.email) {
      user.email = user.email.toLowerCase();
    }

    if (this.registrationForm.valid) {
      this.registrationService.registrationData = {
        ...this.registrationService.registrationData,
        ...this.registrationForm.value,
      };

      // Set the page number in the service
      this.registrationService.pageNumber = 3;

      try {
        await this.apiService
          .createUser(this.registrationService.registrationData)
          .toPromise();
        this.apiService.logout();
        this.router.navigateByUrl('/register4');
        await loading.dismiss();
      } catch (error: any) {
        // Rest of the code remains unchanged
      }
    } else {
      await loading.dismiss();
    }
  }

  goBack() {
    this.navCtrl.navigateBack('/');
  }
}
