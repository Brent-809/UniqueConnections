import { __awaiter, __decorate } from "tslib";
import { Component } from "@angular/core";
import { Validators } from "@angular/forms";
import { LoadingPage } from "../../../../overlays/loading/loading.page";
export let Register1Page = class Register1Page {
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
            username: ["", Validators.required],
        });
    }
    getUser() {
        this.apiService.getAllUsers().subscribe((response) => {
            console.log(response);
            if (response && response.length > 0) {
                this.userName = response[0].email;
            }
        });
    }
    goToNextStep() {
        return __awaiter(this, void 0, void 0, function* () {
            const loading = yield this.modalController.create({
                component: LoadingPage,
            });
            yield loading.present();
            if (this.registrationForm.valid) {
                console.log("formdata: ", this.registrationForm.value);
                this.registrationService.registrationData = Object.assign(Object.assign({}, this.registrationService.registrationData), this.registrationForm.value);
                yield loading.dismiss();
                this.navCtrl.navigateForward("/register2");
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
Register1Page = __decorate([
    Component({
        selector: "app-register1",
        templateUrl: "./register1.page.html",
        styleUrls: ["./register1.page.scss"],
    })
], Register1Page);
//# sourceMappingURL=register1.page.js.map