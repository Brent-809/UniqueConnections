import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { catchError, map, throwError } from "rxjs";
import { jwtDecode } from "jwt-decode";
import { environment } from "../../environments/environment";
let HomeApiService = class HomeApiService {
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
    createUser(user) {
        return this.http.post(`${this.baseUrl}/auth/create`, user).pipe(catchError((error) => {
            if (error.error.sqlMessage &&
                error.error.sqlMessage.includes("Duplicate entry") &&
                error.error.sqlMessage.includes("'username'")) {
                return throwError("Username already exists, please choose another one.");
            }
            else if (error.error.sqlMessage &&
                error.error.sqlMessage.includes("Duplicate entry") &&
                error.error.sqlMessage.includes("'email'")) {
                return throwError("Email address already exists, please use another one.");
            }
            else {
                return throwError("An unknown error occurred.");
            }
        }));
    }
    loginUser(user) {
        return this.http
            .post(`${this.baseUrl}/auth/login`, user)
            .pipe(map((response) => {
            this.token = response.token;
            localStorage.setItem("token", this.token);
            return response;
        }));
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
    updateUser(id, user) {
        return this.http.put(`${this.baseUrl}/users/${id}`, user);
    }
    deleteUser(id) {
        return this.http.delete(`${this.baseUrl}/users/${id}`);
    }
    getVerifiedUserById(id) {
        return this.http.get(`${this.baseUrl}/users/verified/${id}`);
    }
    updateVerifiedStatusById(id, verified) {
        return this.http.put(`${this.baseUrl}/users/verified/${id}`, { verified });
    }
    getGroups() {
        return this.http.get(`${this.baseUrl}/groups/`);
    }
    getGroupId(id) {
        return this.http.get(`${this.baseUrl}/groups/${id}`);
    }
    groupMembers(id) {
        return this.http.get(`${this.baseUrl}/groups/${id}/users/count`).pipe(catchError((error) => {
            console.error("Error in groupMembers:", error);
            throw error;
        }));
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
};
HomeApiService = __decorate([
    Injectable({
        providedIn: "root",
    })
], HomeApiService);
export { HomeApiService };
//# sourceMappingURL=home-api.service.js.map