import { __decorate } from "tslib";
import { Component } from "@angular/core";
let MessagesPage = class MessagesPage {
    constructor(apiService, router, socketService) {
        this.apiService = apiService;
        this.router = router;
        this.socketService = socketService;
        this.joinedGroups = [];
        this.users = [];
        this.friendRequestsIds = [];
        this.pendingFriendRequests = {};
        this.friendIds = [];
        this.goToGroup = (groupId) => {
            const userId = this.apiService.getUserIdFromToken();
            if (!userId) {
                console.error("User ID not found in token");
                return;
            }
            this.apiService.getUserById(userId).subscribe((user) => {
                this.currentUserId = user;
                const joinedGroups = user.joinedGroups;
                if (joinedGroups.includes(groupId)) {
                    this.router.navigate(["/group/", groupId]);
                }
            }, (error) => {
                console.error("Error fetching user details:", error);
            });
        };
    }
    async ngOnInit() {
        await this.getGroupsAndGroupById();
        this.currentUserId = this.apiService.getUserIdFromToken();
        this.socketService.onFriendRequestReceived((data) => {
            this.ngOnInit();
        });
        this.apiService.getUserById(this.currentUserId).subscribe((response) => {
            this.friendRequestsIds = response.pendingFriendRequests;
        });
        this.apiService.getAllUsers().subscribe((response) => {
            const allUserFriendIds = Array.from(new Set(response.reduce((result, user) => result.concat(user.userFriendIds), [])));
            this.users = response
                .filter((user) => user._id !== this.currentUserId)
                .filter((user) => !user.isNewUser)
                .filter((user) => allUserFriendIds.includes(user._id));
            // Ensure that 'response.pendingFriendRequests' is defined and an array
            if (Array.isArray(this.friendRequestsIds)) {
                // Map user IDs to user objects
                this.friendRequestsIds.forEach((userId) => {
                    const user = this.users.find((u) => u._id === userId);
                    if (user) {
                        this.pendingFriendRequests[userId] = user;
                    }
                });
                // Count and log the number of pending users
                const pendingUsersCount = Object.keys(this.pendingFriendRequests).length;
                this.pendingUsersCount = pendingUsersCount;
            }
        });
    }
    async getGroupsAndGroupById() {
        const userId = this.apiService.getUserIdFromToken();
        try {
            const groupIds = await this.apiService
                .getGroupsByuser(userId)
                .toPromise();
            const groupPromises = groupIds.map((id) => this.apiService.getGroupId(id).toPromise());
            const groups = await Promise.all(groupPromises);
            this.joinedGroups = groups;
        }
        catch (error) {
            console.error("Error:", error);
        }
    }
};
MessagesPage = __decorate([
    Component({
        selector: "app-messages",
        templateUrl: "./messages.page.html",
        styleUrls: ["./messages.page.scss"],
    })
], MessagesPage);
export { MessagesPage };
//# sourceMappingURL=messages.page.js.map