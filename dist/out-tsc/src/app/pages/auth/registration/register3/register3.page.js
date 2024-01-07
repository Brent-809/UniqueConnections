import { __awaiter, __decorate } from "tslib";
import { Component } from "@angular/core";
import { Validators, } from "@angular/forms";
import { LoadingPage } from "../../../../overlays/loading/loading.page";
import { passwordValidator } from "../../../../validators/password.validator";
export let Register3Page = class Register3Page {
    constructor(formBuilder, navCtrl, registrationService, modalController, alertController, apiService, router) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.registrationService = registrationService;
        this.modalController = modalController;
        this.alertController = alertController;
        this.apiService = apiService;
        this.router = router;
        this.formData = {};
        this.pwdIcon = "eye-outline";
        this.pwdIcon2 = "eye-outline";
        this.showPwd = false;
        this.showPwd2 = false;
        this.registrationForm = this.formBuilder.group({
            password: [null, [Validators.required, passwordValidator]],
            cpassword: [null, [Validators.required, passwordValidator]],
        }, {
            validator: this.passwordMatchValidator,
        });
    }
    passwordMatchValidator(control) {
        const password = control.get("password");
        const cpassword = control.get("cpassword");
        if (password && cpassword && password.value !== cpassword.value) {
            return { passwordMismatch: true };
        }
        return null;
    }
    goToNextStep(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const loading = yield this.modalController.create({
                component: LoadingPage,
            });
            yield loading.present();
            if (user.password !== user.cpassword) {
                const alert = yield this.alertController.create({
                    header: "Error",
                    message: "Wachtwoord en bevestig wachtwoord komen niet overeen.",
                    buttons: ["OK"],
                });
                yield alert.present();
                return;
            }
            // Check if user.email is defined before converting to lowercase
            if (user.email) {
                user.email = user.email.toLowerCase();
            }
            console.log("Modified user object:", user);
            if (this.registrationForm.valid) {
                console.log("formdata: ", this.formData);
                this.registrationService.registrationData = Object.assign(Object.assign({}, this.registrationService.registrationData), this.registrationForm.value);
                try {
                    yield this.apiService
                        .createUser(this.registrationService.registrationData)
                        .toPromise();
                    this.apiService.logout();
                    this.router.navigateByUrl("/register4");
                    yield loading.dismiss();
                }
                catch (error) {
                    console.log(error);
                    // Rest of the code remains unchanged
                }
            }
            else {
                yield loading.dismiss();
            }
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
    goBack() {
        this.navCtrl.navigateBack("/");
    }
};
Register3Page = __decorate([
    Component({
        selector: "app-register3",
        templateUrl: "./register3.page.html",
        styleUrls: ["./register3.page.scss"],
    })
], Register3Page);
//# sourceMappingURL=register3.page.js.map