import { __awaiter, __decorate } from "tslib";
import { Component } from "@angular/core";
import { Validators, } from "@angular/forms";
import { emailValidator } from "../../../validators/email.validators";
import { passwordValidator } from "../../../validators/password.validator";
import jwt_decode from "jwt-decode";
import { LoadingPage } from "../../../overlays/loading/loading.page";
export let LoginPage = class LoginPage {
    constructor(router, apiService, formBuilder, alertController, loadingController, modalCtrl) {
        this.router = router;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.loadingController = loadingController;
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
    presentLoading() {
        return __awaiter(this, void 0, void 0, function* () {
            this.loading = true;
            return yield this.modalCtrl
                .create({
                component: LoadingPage,
            })
                .then((a) => {
                a.present().then(() => {
                    console.log("presented");
                    if (!this.loading) {
                        a.dismiss().then(() => console.log("abort presenting"));
                    }
                });
            });
        });
    }
    hideLoading() {
        return __awaiter(this, void 0, void 0, function* () {
            this.loading = false;
            return yield this.modalCtrl.dismiss().then(() => console.log("dismissed"));
        });
    }
    loginUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const loading = yield this.modalCtrl.create({
                component: LoadingPage,
            });
            yield loading.present();
            const user = {
                email: this.loginForm.value.email.toLowerCase(),
                password: this.loginForm.value.password,
            };
            this.apiService.loginUser(user).subscribe((response) => __awaiter(this, void 0, void 0, function* () {
                if (response.token) {
                    const decodedToken = jwt_decode(response.token);
                    console.log("decodedToken:", decodedToken);
                    const userId = decodedToken.userId;
                    console.log("userId:", userId);
                    if (userId) {
                        console.log("Verificatieproces gestart");
                        this.apiService.getVerifiedUserById(userId.toString()).subscribe((verifiedStatus) => __awaiter(this, void 0, void 0, function* () {
                            console.log(verifiedStatus);
                            if (verifiedStatus.verified === true) {
                                console.log("Gebruiker is geverifieerd");
                                this.startConfetti();
                                setTimeout(() => {
                                    this.router.navigate(["/"]);
                                }, 1500);
                                this.apiService
                                    .getUserById(userId.toString())
                                    .subscribe((newUserStatus) => __awaiter(this, void 0, void 0, function* () {
                                    console.log("newuserstatus", newUserStatus);
                                    if (newUserStatus.isNewUser === true) {
                                        console.log("Gebruiker is nieuw");
                                        this.startConfetti();
                                        setTimeout(() => {
                                            this.router.navigate(["/newuser"]);
                                        }, 1500);
                                        yield loading.dismiss();
                                    }
                                    else {
                                        setTimeout(() => {
                                            this.router.navigate(["/"]);
                                        }, 1500);
                                        yield loading.dismiss();
                                    }
                                }));
                            }
                            else {
                                console.log("Gebruiker is niet geverifieerd");
                                this.apiService.logout();
                                this.presentVerifyMessage();
                                yield loading.dismiss();
                            }
                        }), (error) => __awaiter(this, void 0, void 0, function* () {
                            console.log("Fout bij het ophalen van de verificatiestatus:", error);
                            yield loading.dismiss();
                            this.apiService.logout();
                        }));
                    }
                    else {
                        yield loading.dismiss();
                        console.log("Verificatieproces mislukt");
                        this.apiService.logout();
                    }
                }
                else {
                    console.log("Inloggen mislukt:", response.message);
                    if (response.message === "Invalid credentials") {
                        const invalidAlert = yield this.alertController.create({
                            header: "Ongeautoriseerd",
                            message: "Ongeldige inloggegevens. Controleer uw gebruikersnaam en wachtwoord.",
                            buttons: ["OK"],
                        });
                        yield invalidAlert.present();
                    }
                    yield loading.dismiss();
                    this.apiService.logout();
                }
            }), (error) => __awaiter(this, void 0, void 0, function* () {
                console.log("Gebruiker is NIET ingelogd!", error);
                this.hideLoading();
                if (error.status === 401) {
                    yield loading.dismiss();
                    this.alertController.create({
                        header: "Ongeautoriseerd",
                        subHeader: "Ongeldige inloggegevens. Controleer uw gebruikersnaam en wachtwoord.",
                        buttons: ["OK"],
                    });
                }
                else if (error.status === 404) {
                    yield loading.dismiss();
                    this.presentAlert("Niet gevonden", "De gevraagde bron is niet gevonden.");
                }
                else {
                    yield loading.dismiss();
                    this.presentAlert("Fout", "Er is een onverwachte fout opgetreden. Probeer het later opnieuw.");
                }
                yield loading.dismiss();
            }));
        });
    }
    presentAlert(header, message) {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: header,
                message: message,
                buttons: ["OK"],
            });
            yield alert.present();
        });
    }
    presentVerifyMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Nog niet geverifieerd",
                message: "Je moet geverifieerd zijn om op deze app in te loggen",
                buttons: [
                    {
                        text: "OK",
                        handler: () => { },
                    },
                ],
            });
            yield alert.present();
        });
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
//# sourceMappingURL=login.page.js.map