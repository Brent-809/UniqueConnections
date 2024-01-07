import { __awaiter, __decorate } from "tslib";
import { Component } from "@angular/core";
export let AddPage = class AddPage {
    constructor(modalCtrl, apiService, router, alertController, socketService) {
        this.modalCtrl = modalCtrl;
        this.apiService = apiService;
        this.router = router;
        this.alertController = alertController;
        this.socketService = socketService;
        this.users = [];
        this.friendRequestsIds = [];
        this.pendingFriendRequests = {};
    }
    ngOnInit() {
        this.currentUserId = this.apiService.getUserIdFromToken();
        this.socketService.onFriendRequestReceived((data) => {
            console.log("Received friend request:", data);
        });
        this.apiService.getUserById(this.currentUserId).subscribe((response) => {
            this.friendRequestsIds = response.pendingFriendRequests;
        });
        this.apiService.getAllUsers().subscribe((response) => {
            this.users = response
                .filter((user) => user.verified)
                .filter((user) => user._id !== this.currentUserId)
                .filter((user) => !user.isNewUser);
            // Ensure that 'response.pendingFriendRequests' is defined and an array
            if (Array.isArray(this.friendRequestsIds)) {
                // Map user IDs to user objects
                this.friendRequestsIds.forEach((userId) => {
                    const user = this.users.find((u) => u._id === userId);
                    if (user) {
                        this.pendingFriendRequests[userId] = user;
                    }
                });
            }
            else {
                console.log("No pending friend requests found.");
            }
        });
    }
    AddFriend(name, userFriendId) {
        return __awaiter(this, void 0, void 0, function* () {
            const addFriendAlert = yield this.alertController.create({
                header: "Voeg vriend toe",
                subHeader: "Wil je " + name + " toevoegen?",
                buttons: [
                    {
                        text: "Ja",
                        role: "add",
                        handler: () => {
                            this.addFriendRequest(userFriendId); // Updated function name
                        },
                    },
                    {
                        text: "Nee",
                        role: "Cancel",
                    },
                ],
            });
            addFriendAlert.present();
        });
    }
    addFriendRequest(userFriendId) {
        return __awaiter(this, void 0, void 0, function* () {
            // Updated function name
            try {
                // Send a friend request action to the server via API service
                this.apiService.addFriend(userFriendId).subscribe(() => {
                    console.log("Friend request sent!");
                    // Optionally, update your UI or perform other actions
                    this.ngOnInit();
                });
            }
            catch (error) {
                console.error("Error sending friend request:", error);
            }
        });
    }
    acceptFriendRequest(senderId) {
        this.socketService.sendFriendRequestAction("accept", senderId);
    }
    declineFriendRequest(senderId) {
        this.socketService.sendFriendRequestAction("decline", senderId);
    }
    onSearchChange(event) { }
};
AddPage = __decorate([
    Component({
        selector: "app-add",
        templateUrl: "./add.page.html",
        styleUrls: ["./add.page.scss"],
    })
], AddPage);
//# sourceMappingURL=add.page.js.map