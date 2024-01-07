import { __awaiter, __decorate } from "tslib";
import { Component } from "@angular/core";
import { Validators } from "@angular/forms";
import { LoadingPage } from "../../../../overlays/loading/loading.page";
import { emailValidator } from "../../../../validators/email.validators";
export let Register2Page = class Register2Page {
    constructor(formBuilder, navCtrl, registrationService, modalController, apiService, router) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.registrationService = registrationService;
        this.modalController = modalController;
        this.apiService = apiService;
        this.router = router;
        this.formData = {};
        this.registrationForm = this.formBuilder.group({
            email: [null, [Validators.required, emailValidator]],
        });
    }
    ngOnInit() {
        this.getEmail();
    }
    getEmail() {
        this.apiService.getAllUsers().subscribe((response) => {
            console.log(response);
            if (response && response.length > 0) {
                this.userEmail = response[0].email;
            }
        });
    }
    goToNextStep() {
        return __awaiter(this, void 0, void 0, function* () {
            const loading = yield this.modalController.create({
                component: LoadingPage,
            });
            yield loading.present();
            const email = this.registrationForm.value.email.toLowerCase(); // Convert email to lowercase
            if (this.userEmail === email) {
                console.error("User already exists");
                yield loading.dismiss();
                return;
            }
            if (this.registrationForm.valid) {
                // Update the email property in the registrationData object
                this.registrationService.registrationData = Object.assign(Object.assign({}, this.registrationService.registrationData), { email: email });
                console.log("email: ", this.registrationService.registrationData.email);
                yield loading.dismiss();
                this.navCtrl.navigateForward("/register3");
            }
            else {
                yield loading.dismiss();
            }
        });
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
//# sourceMappingURL=register2.page.js.map