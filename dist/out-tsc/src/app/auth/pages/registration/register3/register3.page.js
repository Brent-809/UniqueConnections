import { __decorate } from "tslib";
import { Component } from "@angular/core";
import { LoadingPage } from "../../../../shared/overlays/loading/loading.page";
import { passwordValidator } from "../../../../shared/validators/password.validator";
let Register3Page = class Register3Page {
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
            password: [null, [passwordValidator]],
            cpassword: [null, [passwordValidator, this.passwordMatchValidator]],
        }, {
            validator: this.passwordMatchValidator,
        });
    }
    ngOnInit() {
        if (this.registrationService.registrationData) {
            this.registrationForm
                .get("email")
                ?.setValue(this.registrationService.registrationData.email);
        }
    }
    passwordMatchValidator(control) {
        const password = control.get("password");
        const cpassword = control.get("cpassword");
        if (password && cpassword && password.value !== cpassword.value) {
            return { passwordMismatch: true };
        }
        return null;
    }
    async goToNextStep(user) {
        const loading = await this.modalController.create({
            component: LoadingPage,
        });
        await loading.present();
        if (user.password !== user.cpassword) {
            const alert = await this.alertController.create({
                header: "Error",
                message: "Wachtwoord en bevestig wachtwoord komen niet overeen.",
                buttons: ["OK"],
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
            try {
                await this.apiService
                    .createUser(this.registrationService.registrationData)
                    .toPromise();
                this.apiService.logout();
                this.router.navigateByUrl("/register4");
                await loading.dismiss();
            }
            catch (error) {
                // Rest of the code remains unchanged
            }
        }
        else {
            await loading.dismiss();
        }
    }
    goBack() {
        this.navCtrl.navigateBack("/register2");
    }
};
Register3Page = __decorate([
    Component({
        selector: "app-register3",
        templateUrl: "./register3.page.html",
        styleUrls: ["./register3.page.scss"],
    })
], Register3Page);
export { Register3Page };
//# sourceMappingURL=register3.page.js.map