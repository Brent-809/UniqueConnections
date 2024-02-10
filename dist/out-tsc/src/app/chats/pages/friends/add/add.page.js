import { __decorate } from "tslib";
import { Component } from "@angular/core";
let AddPage = class AddPage {
    constructor(apiService, alertController, socketService) {
        this.apiService = apiService;
        this.alertController = alertController;
        this.socketService = socketService;
        this.users = [];
        this.friendRequestsIds = [];
        this.pendingFriendRequests = {};
        this.friendIds = [];
        this.filteredUsers = [];
    }
    ngOnInit() {
        this.currentUserId = this.apiService.getUserIdFromToken();
        this.socketService.onFriendRequestReceived((data) => {
            // Handle friend request received event if needed
        });
        this.apiService.getUserById(this.currentUserId).subscribe((response) => {
            this.friendRequestsIds = response.pendingFriendRequests;
            this.friendIds = response.userFriendIds;
        });
        this.getUsers();
        this.filteredUsers = this.users;
    }
    getUsers() {
        this.apiService.getAllUsers().subscribe((response) => {
            this.users = response
                .filter((user) => user.verified)
                .filter((user) => user._id !== this.currentUserId)
                .filter((user) => !user.isNewUser);
            // Ensure that 'response.pendingFriendRequests' is defined and an array
            if (Array.isArray(response.pendingFriendRequests)) {
                // Map user IDs to user objects
                this.pendingFriendRequests = response.pendingFriendRequests.reduce((acc, userId) => {
                    const user = this.users.find((u) => u._id === userId);
                    if (user) {
                        acc[userId] = user;
                    }
                    return acc;
                }, {});
                // Count and log the number of pending users
                const pendingUsersCount = Object.keys(this.pendingFriendRequests).length;
                console.log(`Number of pending users: ${pendingUsersCount}`);
            }
        });
    }
    async AddFriend(name, userFriendId) {
        const addFriendAlert = await this.alertController.create({
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
    }
    async addFriendRequest(userFriendId) {
        try {
            this.apiService.addFriend(userFriendId).subscribe(() => {
                this.ngOnInit();
            });
        }
        catch (error) {
            console.error("Error sending friend request:", error);
        }
    }
    acceptFriendRequest(senderId) {
        this.apiService.confirmFriendRequest(senderId).subscribe(() => {
            console.log("Friend request approved");
        });
    }
    declineFriendRequest(senderId) {
        this.socketService.sendFriendRequestAction("decline", senderId);
    }
    onSearchChange(event) {
        const searchQuery = event.target.value.toLowerCase();
        if (searchQuery === "") {
            this.filteredUsers = [];
        }
        else {
            this.filteredUsers = this.users.filter((user) => user.name.toLowerCase().includes(searchQuery));
        }
    }
};
AddPage = __decorate([
    Component({
        selector: "app-add",
        templateUrl: "./add.page.html",
        styleUrls: ["./add.page.scss"],
    })
], AddPage);
export { AddPage };
//# sourceMappingURL=add.page.js.map