import { __awaiter, __decorate } from "tslib";
import { Component } from "@angular/core";
export let MessagesPage = class MessagesPage {
    constructor(apiService, router, alertController) {
        this.apiService = apiService;
        this.router = router;
        this.alertController = alertController;
        this.joinedGroups = [];
        this.goToGroup = (groupId) => {
            const userId = this.apiService.getUserIdFromToken();
            if (!userId) {
                console.error("User ID not found in token");
                return;
            }
            this.apiService.getUserById(userId).subscribe((user) => {
                const joinedGroups = user.joinedGroups;
                if (joinedGroups.includes(groupId)) {
                    this.router.navigate(["/group/", groupId]);
                }
            }, (error) => {
                console.error("Error fetching user details:", error);
            });
        };
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getGroupsAndGroupById();
        });
    }
    getGroupsAndGroupById() {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = this.apiService.getUserIdFromToken();
            try {
                const groupIds = yield this.apiService
                    .getGroupsByuser(userId)
                    .toPromise();
                const groupPromises = groupIds.map((id) => this.apiService.getGroupId(id).toPromise());
                const groups = yield Promise.all(groupPromises);
                this.joinedGroups = groups;
            }
            catch (error) {
                console.error("Error:", error);
            }
        });
    }
};
MessagesPage = __decorate([
    Component({
        selector: "app-messages",
        templateUrl: "./messages.page.html",
        styleUrls: ["./messages.page.scss"],
    })
], MessagesPage);
//# sourceMappingURL=messages.page.js.map