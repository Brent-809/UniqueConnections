import { __awaiter, __decorate } from "tslib";
import { Component } from "@angular/core";
import { ImageModalPage } from "../image-modal/image-modal.page";
export let GroupInfoPage = class GroupInfoPage {
    constructor(dataService, modalController, route, router, apiService) {
        this.dataService = dataService;
        this.modalController = modalController;
        this.route = route;
        this.router = router;
        this.apiService = apiService;
        this.background = {
            backgroundImage: "url(https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80)",
        };
        this.tabType = "posts";
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.feeds = this.dataService.getFeed();
            this.events = this.dataService.getEvents();
            this.groups = this.dataService.getGroups();
            yield this.fetchGroupDetails();
            this.joinButtonText = this.getRandomJoinButtonText();
            this.getGroupMembers();
        });
    }
    getGroupMembers() {
        this.apiService.groupMembers(this.groupId).subscribe((response) => {
            console.log(response.members);
            this.memberCount = response.members;
        }, (error) => {
            console.error("Failed to fetch group members:", error);
            // Handle the error accordingly
        });
    }
    getRandomJoinButtonText() {
        const buttonTexts = [
            "Terug naar chat",
            "Kom bij chat",
            "Algemene groep",
            "Terug naar allen",
            "Laat ons praten",
            "Groep weer open",
            "Samen chatten",
            "Allen welkom",
            "Terug naar de groep",
            "Weer samen!",
            "Algemeen nu",
            "Terug in chat",
            "Kom bij ons",
            "Chat herladen",
            "Groepsgesprek",
            "Terug allemaal",
            "Verzamel je weer",
            "Chatten nu!",
            "Terug naar allen",
            "Samen praten",
            "Groep chat actief",
            "Allen in chat",
            "Terug naar samen",
            "Laat ons babbelen",
            "Groep chat open",
            "Terug bij elkaar",
            "Join de chat",
            "Allemaal welkom",
            "Terug naar chatbox",
            "Terug samen",
            "Samen babbelen",
            "Chat weer live",
            "Herenig met chat",
            "Alleen algemeen",
            "Terug bij de bende",
            "Algemene chat",
            "Herenig in chat",
            "Iedereen terug",
            "Terug in actie",
            "Samen chatten",
            "Groep chat nu!",
            "Weer samen zijn",
            "Terug in gesprek",
            "Laat ons samengaan",
            "Verenigde chat",
            "Allen terugkeren",
            "Terug bij iedereen",
            "Groepspraatje nu",
            "Herenig in chat",
            "Terug naar de babbels",
        ];
        const randomIndex = Math.floor(Math.random() * buttonTexts.length);
        return buttonTexts[randomIndex];
    }
    fetchGroupDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.route.paramMap.subscribe((params) => {
                    const groupId = params.get("id");
                    if (groupId) {
                        this.apiService.getGroupById(groupId).subscribe((response) => {
                            if (response &&
                                response._id &&
                                response.name &&
                                response.members !== undefined &&
                                response.category &&
                                response.image &&
                                response.description) {
                                this.name = response.name;
                                this.img = response.image;
                                this.category = response.category;
                                this.desc = response.description;
                                this.response = response;
                                this.members = response.members;
                                this.groupId = response._id;
                            }
                            else {
                                console.error("Group details not found");
                            }
                            resolve();
                        }, (error) => {
                            console.error("Error retrieving group details:", error);
                            reject(error); // Reject the promise if there's an error
                        });
                    }
                    else {
                        console.error("Invalid group ID");
                        reject(new Error("Invalid group ID")); // Reject the promise for invalid groupId
                    }
                });
            });
        });
    }
    goToChat() {
        this.router.navigateByUrl(`/group/${this.groupId}`);
    }
    openModal(imgUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: ImageModalPage,
                cssClass: "modal-container",
                componentProps: {
                    data: imgUrl,
                },
            });
            return yield modal.present();
        });
    }
    goToSettings() {
        this.router.navigate(["settings"]);
    }
};
GroupInfoPage = __decorate([
    Component({
        selector: "app-group-info",
        templateUrl: "./group-info.page.html",
        styleUrls: ["./group-info.page.scss"],
    })
], GroupInfoPage);
//# sourceMappingURL=group-info.page.js.map