import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { catchError, map, tap, throwError } from "rxjs";
import { jwtDecode } from "jwt-decode";
import { environment } from "../../environments/environment";
let ChatsApiService = class ChatsApiService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = environment.apiUrl;
        const token = localStorage.getItem("token");
        if (token) {
            this.token = token;
        }
    }
    logout() {
        this.token = "";
        localStorage.removeItem("token");
        this.router.navigate(["/welcome"]);
    }
    isLoggedIn() {
        return !!this.token;
    }
    getAllUsers() {
        return this.http.get(`${this.baseUrl}/users`);
    }
    getUserById(id) {
        return this.http.get(`${this.baseUrl}/users/${id}`);
    }
    getUserIdFromToken() {
        if (!this.token) {
            return undefined;
        }
        try {
            const decodedToken = jwtDecode(this.token);
            return decodedToken.userId;
        }
        catch (error) {
            console.error("Error decoding token:", error);
            return undefined;
        }
    }
    joinGroup(groupId) {
        const userId = this.getUserIdFromToken();
        if (!userId) {
            console.error("User ID not found in token");
            return throwError("User ID not found");
        }
        const body = {
            userId: userId,
            groupId: groupId,
        };
        return this.http.post(`${this.baseUrl}/groups/join`, body);
    }
    generateUserGroupId() {
        const timestamp = new Date().getTime();
        const random = Math.floor(Math.random() * 10000);
        return `${timestamp}${random}`;
    }
    getGroupById(id) {
        return this.http.get(`${this.baseUrl}/groups/${id}`).pipe(tap((response) => { }), map((response) => {
            if (response) {
                return response;
            }
            else {
                console.error("Invalid API response:", response);
                return null;
            }
        }), catchError((error) => {
            console.error("API Error:", error);
            return throwError(error);
        }));
    }
    getGroups() {
        return this.http.get(`${this.baseUrl}/groups/`);
    }
    getGroupId(id) {
        return this.http.get(`${this.baseUrl}/groups/${id}`);
    }
    groupMembers({ id }) {
        return this.http.get(`${this.baseUrl}/groups/${id}/users/count`).pipe(catchError((error) => {
            console.error("Error in groupMembers:", error);
            throw error;
        }));
    }
    sendMessage({ message, sender, groupId, }) {
        const userId = this.getUserIdFromToken();
        if (!userId) {
            console.error("User ID not found in token");
            return throwError("User ID not found");
        }
        const body = {
            content: message,
            sender: sender,
            groupId: groupId,
            timestamp: new Date(),
        };
        return this.http.post(`${this.baseUrl}/messages/${groupId}`, body);
    }
    sendPersonalMessage({ message, sender, receiver, }) {
        const userId = this.getUserIdFromToken();
        if (!userId) {
            console.error("User ID not found in token");
            return throwError("User ID not found");
        }
        const body = {
            content: message,
            sender: sender,
            receiver: receiver,
            timestamp: new Date(),
        };
        return this.http.post(`${this.baseUrl}/messages/user/`, body);
    }
    // Method to get all chat messages for a group
    getGroupMessages(groupId) {
        return this.http.get(`${this.baseUrl}/messages/${groupId}`);
    }
    getUserMessages(userId) {
        return this.http.get(`${this.baseUrl}/messages/user/${userId}`);
    }
    getPrechosenProfileImages() {
        return this.http.get(`${this.baseUrl}/profile-images`);
    }
    updatePrivacySettings(id, privacySettings) {
        return this.http.post(`${this.baseUrl}/users/${id}/privacy`, privacySettings);
    }
    getProfileImages() {
        return this.http.get(`${this.baseUrl}/users/profile/images`);
    }
    getGroupsByuser(userId) {
        return this.http.get(`${this.baseUrl}/groups/${userId}/user/joined`);
    }
    addFriend(userFriendId) {
        const userId = this.getUserIdFromToken();
        if (!userId) {
            console.error("User ID not found in token");
            return throwError("User ID not found");
        }
        const body = {
            userFriendId: userFriendId,
            userId: userId,
        };
        return this.http.put(`${this.baseUrl}/users/friends/add`, body).pipe(catchError((error) => {
            console.error("Error adding friend:", error);
            return throwError(error);
        }));
    }
    confirmFriendship(userFriendId) {
        const userId = this.getUserIdFromToken();
        if (!userId) {
            console.error("User ID not found in token");
            return throwError("User ID not found");
        }
        const body = {
            userFriendId: userFriendId,
            userId: userId,
        };
        return this.http.put(`${this.baseUrl}/users/friends/confirm`, body).pipe(catchError((error) => {
            console.error("Error confirming friendship:", error);
            return throwError(error);
        }));
    }
    confirmFriendRequest(userFriendId) {
        const userId = this.getUserIdFromToken();
        if (!userId) {
            console.error("User ID not found in token");
            return throwError("User ID not found");
        }
        const body = {
            userFriendId: userFriendId,
            userId: userId,
        };
        return this.http.put(`${this.baseUrl}/users/friends/confirm`, body).pipe(catchError((error) => {
            console.error("Error confirming friend:", error);
            return throwError(error);
        }));
    }
};
ChatsApiService = __decorate([
    Injectable({
        providedIn: "root",
    })
], ChatsApiService);
export { ChatsApiService };
//# sourceMappingURL=chats-api.service.js.map