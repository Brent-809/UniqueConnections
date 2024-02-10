import { __decorate } from "tslib";
import { Component } from "@angular/core";
import { Validators } from "@angular/forms";
import { LoadingPage } from "../../../../shared/overlays/loading/loading.page";
import { emailValidator } from "../../../../shared/validators/email.validators";
let Register2Page = class Register2Page {
    constructor(formBuilder, navCtrl, registrationService, modalController, apiService) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.registrationService = registrationService;
        this.modalController = modalController;
        this.apiService = apiService;
        this.formData = {};
        this.registrationForm = this.formBuilder.group({
            email: [null, [Validators.required, emailValidator]],
        });
    }
    ngOnInit() {
        this.getEmail();
        if (this.registrationService.registrationData) {
            this.registrationForm
                .get("email")
                ?.setValue(this.registrationService.registrationData.email);
        }
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
            await loading.dismiss();
            this.navCtrl.navigateForward("/register3");
        }
        else {
            await loading.dismiss();
        }
    }
    goBack() {
        this.navCtrl.navigateBack("/");
    }
};
Register2Page = __decorate([
    Component({
        selector: "app-register2",
        templateUrl: "./register2.page.html",
        styleUrls: ["./register2.page.scss"],
    })
], Register2Page);
export { Register2Page };
//# sourceMappingURL=register2.page.js.map