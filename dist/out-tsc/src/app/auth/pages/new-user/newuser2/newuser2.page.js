import { __decorate } from "tslib";
import { Component, ViewChild } from "@angular/core";
import { Validators } from "@angular/forms";
import { GoogleMap } from "@capacitor/google-maps";
import { environment } from "../../../../../environments/environment";
let Newuser2Page = class Newuser2Page {
    async createMap() {
        this.newMap = await GoogleMap.create({
            id: "map",
            element: this.mapRef.nativeElement,
            apiKey: environment.googleMapsApi,
            config: {
                center: {
                    lat: 33.6,
                    lng: -117.9,
                },
                zoom: 8,
            },
        });
    }
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
            developmentalDisorder: ["", Validators.required],
        });
    }
    savedisorder() {
        const userId = this.apiService.getUserIdFromToken();
        const developmentalDisorder = this.developmentalDisorder;
        if (userId) {
            this.apiService
                .updateUserDisorder(userId, this.developmentalDisorder)
                .subscribe((response) => {
                if (response.id &&
                    response.developmentalDisorder === developmentalDisorder) {
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
        if (userId) {
            this.apiService
                .updateUserDisorder(userId, this.newUserForm.value.developmentalDisorder)
                .subscribe((response) => {
                if (response.id &&
                    response.developmentalDisorder === developmentalDisorder) {
                }
            });
            this.router.navigateByUrl("/newuser3");
        }
    }
    GoToNextStep() {
        this.router.navigateByUrl("/newuser3");
    }
};
__decorate([
    ViewChild("map")
], Newuser2Page.prototype, "mapRef", void 0);
Newuser2Page = __decorate([
    Component({
        selector: "app-newuser2",
        templateUrl: "./newuser2.page.html",
        styleUrls: ["./newuser2.page.scss"],
    })
], Newuser2Page);
export { Newuser2Page };
//# sourceMappingURL=newuser2.page.js.map