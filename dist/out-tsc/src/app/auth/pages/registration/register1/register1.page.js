import { __decorate } from "tslib";
import { Component } from "@angular/core";
import { Validators, } from "@angular/forms";
import { LoadingPage } from "../../../../shared/overlays/loading/loading.page";
import { map, catchError, of } from "rxjs";
let Register1Page = class Register1Page {
    constructor(formBuilder, navCtrl, registrationService, modalController, apiService) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.registrationService = registrationService;
        this.modalController = modalController;
        this.apiService = apiService;
        this.formData = {};
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
    userNameValidator(control) {
        const username = control.value;
        return this.apiService.checkUserNameAvailable(username).pipe(map((isAvailable) => {
            return isAvailable ? null : { usernameTaken: true };
        }), catchError(() => {
            return of({ usernameTaken: true });
        }));
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
        }
        else {
            await loading.dismiss();
        }
    }
    goBack() {
        this.navCtrl.navigateBack("/");
    }
};
Register1Page = __decorate([
    Component({
        selector: "app-register1",
        templateUrl: "./register1.page.html",
        styleUrls: ["./register1.page.scss"],
    })
], Register1Page);
export { Register1Page };
//# sourceMappingURL=register1.page.js.map