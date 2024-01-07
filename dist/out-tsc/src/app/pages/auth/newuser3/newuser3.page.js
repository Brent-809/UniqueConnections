import { __decorate } from "tslib";
// newuser3.page.ts
import { Component } from "@angular/core";
export let Newuser3Page = class Newuser3Page {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.privacyVariables = [
            { label: "Name", visible: true },
            { label: "Age", visible: true },
            { label: "Gender", visible: true },
            { label: "Sexuality", visible: true },
            { label: "Developmental Disorder", visible: true },
        ];
    }
    ngOnInit() {
        this.fetchProfileImages();
        console.log(this.profileImages);
    }
    fetchProfileImages() {
        this.apiService.getProfileImages().subscribe((response) => {
            this.profileImages = response;
            if (this.profileImages) {
                this.selectedProfileImage = this.profileImages[0];
            }
        }, (error) => {
            console.log("Error fetching profile images:", error);
        });
    }
    selectProfileImage(image) {
        this.selectedProfileImage = image;
    }
    updateValue(privacyVariable) {
        const id = this.apiService.getUserIdFromToken();
        if (id) {
            switch (privacyVariable.label) {
                case "Wettelijke Naam":
                    this.apiService
                        .updateNamePrivacyStatusById(id, privacyVariable.visible)
                        .subscribe(() => {
                        console.log(`Updated ${privacyVariable.label} privacy status.`);
                    }, (error) => {
                        console.log("Error updating name privacy status:", error);
                    });
                    break;
                case "Leeftijd":
                    this.apiService
                        .updateAgePrivacyStatusById(id, privacyVariable.visible)
                        .subscribe(() => {
                        console.log(`Updated ${privacyVariable.label} privacy status.`);
                    }, (error) => {
                        console.log("Error updating age privacy status:", error);
                    });
                    break;
                case "Geslacht":
                    this.apiService
                        .updateGenderPrivacyStatusById(id, privacyVariable.visible)
                        .subscribe(() => {
                        console.log(`Updated ${privacyVariable.label} privacy status.`);
                    }, (error) => {
                        console.log("Error updating gender privacy status:", error);
                    });
                    break;
                case "Seksualiteit":
                    this.apiService
                        .updateSexualityPrivacyStatusById(id, privacyVariable.visible)
                        .subscribe(() => {
                        console.log(`Updated ${privacyVariable.label} privacy status.`);
                    }, (error) => {
                        console.log("Error updating gender privacy status:", error);
                    });
                    break;
                case "Ontwikkelingsstoornis":
                    this.apiService
                        .updateDisorderPrivacyStatusById(id, privacyVariable.visible)
                        .subscribe(() => {
                        console.log(`Updated ${privacyVariable.label} privacy status.`);
                    }, (error) => {
                        console.log("Error updating gender privacy status:", error);
                    });
                    break;
                default:
                    console.log("Invalid privacy variable.");
            }
        }
        else {
            console.log("User ID not found in the token.");
        }
    }
    finish() {
        const id = this.apiService.getUserIdFromToken();
        if (id && this.selectedProfileImage) {
            this.apiService
                .selectProfileImage(id, this.selectedProfileImage)
                .subscribe(() => {
                console.log("Profile image selected successfully");
                // Now, update the privacy settings
                this.apiService.updateNewUserStatus(id).subscribe(() => {
                    console.log("New user updated successfully");
                    this.router.navigateByUrl("/");
                }, (error) => {
                    console.log("Error updating privacy settings:", error);
                });
            }, (error) => {
                console.log("Error selecting profile image:", error);
            });
        }
    }
};
Newuser3Page = __decorate([
    Component({
        selector: "app-newuser3",
        templateUrl: "./newuser3.page.html",
        styleUrls: ["./newuser3.page.scss"],
    })
], Newuser3Page);
//# sourceMappingURL=newuser3.page.js.map