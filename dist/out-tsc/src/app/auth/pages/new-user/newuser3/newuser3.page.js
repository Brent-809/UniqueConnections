import { __decorate } from "tslib";
// newuser3.page.ts
import { Component } from "@angular/core";
let Newuser3Page = class Newuser3Page {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.privacyVariables = [
            { label: "Name", visible: true },
            { label: "Age", visible: true },
            { label: "Gender", visible: true },
        ];
    }
    ngOnInit() {
        this.fetchProfileImages();
    }
    fetchProfileImages() {
        this.apiService.getProfileImages().subscribe((response) => {
            this.profileImages = response;
            if (this.profileImages) {
                this.selectedProfileImage = this.profileImages[0];
            }
        }, (error) => {
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
                    }, (error) => {
                    });
                    break;
                case "Leeftijd":
                    this.apiService
                        .updateAgePrivacyStatusById(id, privacyVariable.visible)
                        .subscribe(() => {
                    }, (error) => {
                    });
                    break;
                case "Geslacht":
                    this.apiService
                        .updateGenderPrivacyStatusById(id, privacyVariable.visible)
                        .subscribe(() => {
                    }, (error) => {
                    });
                    break;
                case "Seksualiteit":
                    this.apiService
                        .updateSexualityPrivacyStatusById(id, privacyVariable.visible)
                        .subscribe(() => {
                    }, (error) => {
                    });
                    break;
                case "Ontwikkelingsstoornis":
                    this.apiService
                        .updateDisorderPrivacyStatusById(id, privacyVariable.visible)
                        .subscribe(() => {
                    }, (error) => {
                    });
                    break;
                default:
            }
        }
        else {
        }
    }
    finish() {
        const id = this.apiService.getUserIdFromToken();
        if (id && this.selectedProfileImage) {
            this.apiService
                .selectProfileImage(id, this.selectedProfileImage)
                .subscribe(() => {
                // Now, update the privacy settings
                this.apiService.updateNewUserStatus(id).subscribe(() => {
                    this.router.navigateByUrl("/");
                }, (error) => {
                });
            }, (error) => {
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
export { Newuser3Page };
//# sourceMappingURL=newuser3.page.js.map