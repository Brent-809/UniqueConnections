import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertController, ModalController } from "@ionic/angular";
import { emailValidator } from "src/app/shared/validators/email.validators";
import { passwordValidator } from "src/app/shared/validators/password.validator";
import { jwtDecode } from "jwt-decode";
import { HttpErrorResponse } from "@angular/common/http";
import { LoadingPage } from "src/app/shared/overlays/loading/loading.page";
import { AuthApiService } from "../../auth-api.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  loading: any;
  public fireConfetti = false;
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private apiService: AuthApiService,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, emailValidator]],
      password: [null, [Validators.required, passwordValidator]],
    });
  }

  public startConfetti() {
    this.fireConfetti = true;
  }

  goBack() {
    this.router.navigate(["/welcome"]);
  }

  async presentLoading() {
    this.loading = true;
    return await this.modalCtrl
      .create({
        component: LoadingPage,
      })
      .then((a: any) => {
        a.present().then(() => {
          if (!this.loading) {
            a.dismiss();
          }
        });
      });
  }

  async hideLoading() {
    this.loading = false;
    return await this.modalCtrl.dismiss();
  }

  async loginUser() {
    const loading = await this.modalCtrl.create({
      component: LoadingPage,
    });
    await loading.present();
    const user = {
      email: this.loginForm.value.email.toLowerCase(),
      password: this.loginForm.value.password,
    };

    this.apiService.loginUser(user).subscribe(
      async (response: any) => {
        if (response.token) {
          const decodedToken = jwtDecode(response.token) as any;

          const userId = decodedToken.userId;

          if (userId) {
            this.startConfetti();
            setTimeout(() => {
              this.router.navigate(["/"]);
            }, 1500);
            this.apiService
              .getUserById(userId.toString())
              .subscribe(async (newUserStatus: any) => {
                if (newUserStatus.isNewUser === true) {
                  this.startConfetti();
                  setTimeout(() => {
                    this.router.navigate(["/newuser"]);
                  }, 1500);
                  await loading.dismiss();
                } else {
                  setTimeout(() => {
                    this.router.navigate(["/"]);
                  }, 1500);
                  await loading.dismiss();
                }
              });
          }
        } else {
          await loading.dismiss();
          this.apiService.logout();
        }
      },

      async (error: HttpErrorResponse) => {
        this.hideLoading();

        if (error.status === 401) {
          await loading.dismiss();

          this.alertController.create({
            header: "Ongeautoriseerd",
            subHeader:
              "Ongeldige inloggegevens. Controleer uw gebruikersnaam en wachtwoord.",
            buttons: ["OK"],
          });
        } else if (error.status === 404) {
          await loading.dismiss();

          this.presentAlert(
            "Niet gevonden",
            "De gevraagde bron is niet gevonden."
          );
        } else {
          await loading.dismiss();

          this.presentAlert(
            "Fout",
            "Er is een onverwachte fout opgetreden. Probeer het later opnieuw."
          );
        }
        await loading.dismiss();
      }
    );
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ["OK"],
    });

    await alert.present();
  }

  goToRegister() {
    this.router.navigateByUrl("/register");
  }

  goToVerified() {
    this.router.navigateByUrl("/verified");
  }
}
