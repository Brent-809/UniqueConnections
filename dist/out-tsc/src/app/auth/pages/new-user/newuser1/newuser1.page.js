import { __decorate } from "tslib";
import { Component } from "@angular/core";
let Newuser1Page = class Newuser1Page {
    updateBioLength() {
        this.currentBioLength = this.bio.length;
        // Truncate the input if it exceeds the maximum length
        if (this.bio.length > this.maxLength) {
            this.bio = this.bio.substr(0, this.maxLength);
        }
    }
    constructor(apiService, router, formBuilder) {
        this.apiService = apiService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.age = 13;
        this.ageDisable = false;
        this.bioDisable = false;
        this.bio = ""; // ngModel bound property
        this.currentBioLength = 0; // track current bio length
        this.maxLength = 150; // maximum allowed bio length
        this.isAgeSubmitted = false;
        this.isBioSubmitted = false;
    }
    ngOnInit() {
        this.newUserForm = this.formBuilder.group({
            age: 13,
            bio: [""],
        });
    }
    saveBioAndAge() {
        const userId = this.apiService.getUserIdFromToken();
        const bio = this.newUserForm.value.bio;
        const age = this.age;
        if (userId) {
            this.apiService.updateUserBio(userId, bio).subscribe((response) => {
                if (response.id && response.bio === bio) {
                    this.bioDisable = true;
                    this.isBioSubmitted = true;
                }
            });
            this.apiService
                .updateUserAge(userId, this.age)
                .subscribe((response) => {
                if (response.id && response.age === age) {
                    this.ageDisable = true;
                    this.isAgeSubmitted = true;
                }
            });
            this.router.navigateByUrl("/newuser2");
        }
    }
    GoToNextStep() {
        this.router.navigateByUrl("/newuser2");
    }
    isFormSubmitted() {
        return this.isAgeSubmitted && this.isBioSubmitted;
    }
    bioEnable() {
        this.bioDisable = false;
        this.bio = "";
        this.currentBioLength = 0;
    }
};
Newuser1Page = __decorate([
    Component({
        selector: "app-newuser1",
        templateUrl: "./newuser1.page.html",
        styleUrls: ["./newuser1.page.scss"],
    })
], Newuser1Page);
export { Newuser1Page };
//# sourceMappingURL=newuser1.page.js.map