import { __decorate } from "tslib";
import { Component } from "@angular/core";
let GeneralPage = class GeneralPage {
    constructor(apiService, router, renderer) {
        this.apiService = apiService;
        this.router = router;
        this.renderer = renderer;
        this.refreshing = false;
        this.images = [];
        this.groupIds = [];
        this.groups = [];
    }
    ngOnInit() {
        this.joinButtonText = this.getRandomJoinButtonText();
        this.getGroups();
    }
    getGroups() {
        this.apiService.getGroups().subscribe((response) => {
            if (response && Array.isArray(response.groups)) {
                this.groups = response.groups.reduce((acc, groupArray) => {
                    return acc.concat(groupArray.map((group) => group));
                }, []);
                // Filter out valid groups
                this.groups = this.groups.filter((group) => group.id);
            }
            else {
                console.error("Invalid response format. Expected an object with a 'groups' property.");
            }
        }, (error) => {
            console.error("Error retrieving group IDs:", error);
        });
    }
    getRandom(event) {
        setTimeout(() => {
            this.joinButtonText = this.getRandomJoinButtonText();
            event.target.complete();
        }, 1000);
    }
    joinGroup(groupId) {
        this.apiService.joinGroup(groupId.toString()).subscribe(() => {
            this.router.navigateByUrl("/group/" + groupId);
        }, (httpError) => {
            console.error("Error joining group:", httpError);
            if (httpError.status === 200) {
                if (httpError.error.error === "User and group already exist") {
                    this.router.navigateByUrl("/group/" + groupId);
                }
                else {
                    // Handle other 403 errors
                }
            }
            else {
                console.error("Unexpected error occurred:", httpError);
            }
        });
    }
    goToGroupInfo(groupId) {
        this.router.navigateByUrl("/group-info/" + groupId);
    }
    getRandomJoinButtonText() {
        const buttonTexts = [
            "Join nu!",
            "Sluit je aan!",
            "Word lid!",
            "Doe mee!",
            "Verbind je!",
            "Maak deel uit!",
            "Vorm een groep!",
            "Ontdek samen!",
            "Samen sterker!",
            "Groep toetreden",
            "Kom erbij!",
            "Word een team!",
            "Join community!",
            "Sluit je aan ons!",
            "Verenig je met ons!",
            "Get your groove on!",
            "Embrace awesome!",
            "Let's rock this!",
            "Join cool kids!",
            "Unleash fabulosity!",
            "Be a rainbow warrior!",
            "Connect and conquer!",
            "Jump into fun zone!",
            "Embrace uniqueness!",
            "Dance like nobody's!",
            "Spread love, join us!",
            "Unlock true potential!",
            "Together, unstoppable!",
            "Join party people!",
            "Embrace togetherness!",
            "Get in on excitement!",
            "Create something amazing!",
            "Join laughter revolution!",
            "Be yourself, join!",
            "Break free, join us!",
            "Embrace inner hero!",
            "Step into adventure!",
            "Join extraordinary!",
            "Find your tribe, join!",
            "Unleash your wild!",
            "Create awesome memories!",
            "Join fun, fly high!",
            "Be part, awesome squad!",
            "Join love revolution!",
            "Dive into possibilities!",
        ];
        const randomIndex = Math.floor(Math.random() * buttonTexts.length);
        return buttonTexts[randomIndex];
    }
    changeButtonStyle() {
        const button = document.getElementById("join"); // Replace 'myButton' with the actual ID of your button
        this.renderer.setStyle(button, "background-color", "red");
        this.renderer.setStyle(button, "color", "white");
        // Add any other style changes you want to make
    }
};
GeneralPage = __decorate([
    Component({
        selector: "app-general",
        templateUrl: "./general.page.html",
        styleUrls: ["./general.page.scss"],
    })
], GeneralPage);
export { GeneralPage };
//# sourceMappingURL=general.page.js.map