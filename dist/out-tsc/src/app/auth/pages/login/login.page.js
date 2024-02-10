import { __decorate } from "tslib";
import { Component } from "@angular/core";
import { Validators } from "@angular/forms";
import { emailValidator } from "../../../shared/validators/email.validators";
import { passwordValidator } from "../../../shared/validators/password.validator";
import { jwtDecode } from "jwt-decode";
import { LoadingPage } from "../../../shared/overlays/loading/loading.page";
let LoginPage = class LoginPage {
    constructor(router, apiService, formBuilder, alertController, modalCtrl) {
        this.router = router;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.modalCtrl = modalCtrl;
        this.fireConfetti = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: [null, [Validators.required, emailValidator]],
            password: [null, [Validators.required, passwordValidator]],
        });
    }
    startConfetti() {
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
            .then((a) => {
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
        this.apiService.loginUser(user).subscribe(async (response) => {
            if (response.token) {
                const decodedToken = jwtDecode(response.token);
                const userId = decodedToken.userId;
                if (userId) {
                    this.startConfetti();
                    setTimeout(() => {
                        this.router.navigate(["/"]);
                    }, 1500);
                    this.apiService
                        .getUserById(userId.toString())
                        .subscribe(async (newUserStatus) => {
                        if (newUserStatus.isNewUser === true) {
                            this.startConfetti();
                            setTimeout(() => {
                                this.router.navigate(["/newuser"]);
                            }, 1500);
                            await loading.dismiss();
                        }
                        else {
                            setTimeout(() => {
                                this.router.navigate(["/"]);
                            }, 1500);
                            await loading.dismiss();
                        }
                    });
                }
            }
            else {
                await loading.dismiss();
                this.apiService.logout();
            }
        }, async (error) => {
            this.hideLoading();
            if (error.status === 401) {
                await loading.dismiss();
                this.alertController.create({
                    header: "Ongeautoriseerd",
                    subHeader: "Ongeldige inloggegevens. Controleer uw gebruikersnaam en wachtwoord.",
                    buttons: ["OK"],
                });
            }
            else if (error.status === 404) {
                await loading.dismiss();
                this.presentAlert("Niet gevonden", "De gevraagde bron is niet gevonden.");
            }
            else {
                await loading.dismiss();
                this.presentAlert("Fout", "Er is een onverwachte fout opgetreden. Probeer het later opnieuw.");
            }
            await loading.dismiss();
        });
    }
    async presentAlert(header, message) {
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
};
LoginPage = __decorate([
    Component({
        selector: "app-login",
        templateUrl: "./login.page.html",
        styleUrls: ["./login.page.scss"],
    })
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map