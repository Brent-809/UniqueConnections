import { __decorate } from "tslib";
import { Component } from "@angular/core";
import { Validators } from "@angular/forms";
export let Newuser2Page = class Newuser2Page {
    constructor(apiService, router, formBuilder) {
        this.apiService = apiService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.disorderDisable = false;
        this.developmentalDisorder = ""; // ngModel bound property
        this.isdisorderSubmitted = false;
        this.sexualityDisable = false;
        this.isSexualitySubmitted = false;
    }
    ngOnInit() {
        this.newUserForm = this.formBuilder.group({
            developmentalDisorder: ['', Validators.required],
            selectedSexuality: ['', Validators.required]
        });
    }
    savedisorder() {
        const userId = this.apiService.getUserIdFromToken();
        const developmentalDisorder = this.developmentalDisorder;
        if (userId) {
            this.apiService
                .updateUserDisorder(userId, this.developmentalDisorder)
                .subscribe((response) => {
                console.log("Update disorder: ", response);
                if (response.id &&
                    response.developmentalDisorder === developmentalDisorder) {
                    console.log("User disorder successfully updated!");
                    this.disorderDisable = true;
                    this.isdisorderSubmitted = true;
                }
            });
        }
    }
    isFormSubmitted() {
        return this.isdisorderSubmitted && this.isSexualitySubmitted;
    }
    disorderEnable() {
        this.disorderDisable = false;
        this.developmentalDisorder = "";
    }
    SeksualiteitEnable() {
        this.sexualityDisable = false;
    }
    SaveSeksualiteitAndDisorder() {
        const userId = this.apiService.getUserIdFromToken();
        const developmentalDisorder = this.developmentalDisorder;
        const selectedSexuality = this.selectedSexuality;
        if (userId) {
            this.apiService
                .updateUserSexuality(userId, this.newUserForm.value.selectedSexuality)
                .subscribe((response) => {
                console.log("Update Sexuality: ", response);
                if (response.id && response.sexuality === selectedSexuality) {
                    console.log("User Sexuality successfully updated!");
                }
            });
            this.apiService
                .updateUserDisorder(userId, this.newUserForm.value.developmentalDisorder)
                .subscribe((response) => {
                console.log("Update disorder: ", response);
                if (response.id &&
                    response.developmentalDisorder === developmentalDisorder) {
                    console.log("User disorder successfully updated!");
                }
            });
            this.router.navigateByUrl('/newuser3');
        }
    }
    GoToNextStep() {
        this.router.navigateByUrl("/newuser3");
    }
};
Newuser2Page = __decorate([
    Component({
        selector: "app-newuser2",
        templateUrl: "./newuser2.page.html",
        styleUrls: ["./newuser2.page.scss"],
    })
], Newuser2Page);
//# sourceMappingURL=newuser2.page.js.map