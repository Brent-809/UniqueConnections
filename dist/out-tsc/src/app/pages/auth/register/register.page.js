import { __awaiter, __decorate } from "tslib";
import { Component } from "@angular/core";
import { Validators, FormControl, } from "@angular/forms";
import { emailValidator } from "../../../validators/email.validators";
import { passwordValidator } from "../../../validators/password.validator";
import { LoadingPage } from "../../../overlays/loading/loading.page";
export let RegisterPage = class RegisterPage {
    constructor(formBuilder, router, loadingController, apiService, alertController, modalCtrl) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.loadingController = loadingController;
        this.apiService = apiService;
        this.alertController = alertController;
        this.modalCtrl = modalCtrl;
        this.pwdIcon = "eye-outline";
        this.pwdIcon2 = "eye-outline";
        this.showPwd = false;
        this.showPwd2 = false;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            email: [null, [Validators.required, emailValidator]],
            password: [null, [Validators.required, passwordValidator]],
            chosen_name: new FormControl("", [
                Validators.required,
                Validators.minLength(4),
            ]),
            confirmPassword: [null, [Validators.required]],
            name: new FormControl("", [Validators.required, Validators.minLength(4)]),
            username: new FormControl("", [
                Validators.required,
                Validators.minLength(4),
            ]),
            accept: new FormControl(false, Validators.requiredTrue),
        });
    }
    presentLoading() {
        return __awaiter(this, void 0, void 0, function* () {
            this.loading = true;
            return yield this.modalCtrl.create({
                component: LoadingPage
            }).then((a) => {
                a.present().then(() => {
                    console.log("presented");
                    if (!this.loading) {
                        a.dismiss().then(() => console.log("abort presenting"));
                    }
                });
            });
        });
    }
    togglePwd() {
        this.showPwd = !this.showPwd;
        this.pwdIcon = this.showPwd ? "eye-off-outline" : "eye-outline";
    }
    togglePwd2() {
        this.showPwd2 = !this.showPwd2;
        this.pwdIcon2 = this.showPwd2 ? "eye-off-outline" : "eye-outline";
    }
    hideLoading() {
        return __awaiter(this, void 0, void 0, function* () {
            this.loading = false;
            return yield this.loadingController
                .dismiss()
                .then(() => console.log("dismissed"));
        });
    }
    signUp(user) {
        return __awaiter(this, void 0, void 0, function* () {
            if (user.password !== user.confirmPassword) {
                const alert = yield this.alertController.create({
                    header: "Error",
                    message: "Wachtwoord en bevestig wachtwoord komen niet overeen.",
                    buttons: ["OK"],
                });
                yield alert.present();
                return;
            }
            try {
                yield this.apiService.createUser(user).toPromise();
                this.presentLoading();
                this.router.navigate(["/"]);
                this.hideLoading();
                this.apiService.logout();
            }
            catch (error) {
                console.log(error);
                if (error &&
                    error.message &&
                    error.message.includes("Username already exists")) {
                    console.log("Showing username alert...");
                    const alert = yield this.alertController.create({
                        header: "Error",
                        message: "Gebruikersnaam is al in gebruik, Gebruik een andere gebruikersnaam.",
                        buttons: ["OK"],
                    });
                    yield alert.present();
                }
                else if (error &&
                    error.message &&
                    error.message.includes("Email already exists")) {
                    console.log("Showing email alert...");
                    const alert = yield this.alertController.create({
                        header: "Error",
                        message: "E-mail is al in gebruik, Gebruik een andere E-mail.",
                        buttons: ["OK"],
                    });
                    yield alert.present();
                }
                else {
                    const alert = yield this.alertController.create({
                        header: "Error",
                        message: "Gebruikersnaam of Email is al in gebruik",
                        buttons: ["OK"],
                    });
                    yield alert.present();
                }
            }
        });
    }
    goBack() {
        this.router.navigate(["/welcome"]);
    }
};
RegisterPage = __decorate([
    Component({
        selector: "app-register",
        templateUrl: "./register.page.html",
        styleUrls: ["./register.page.scss"],
    })
], RegisterPage);
//# sourceMappingURL=register.page.js.map