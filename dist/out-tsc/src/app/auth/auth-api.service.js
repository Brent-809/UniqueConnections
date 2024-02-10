import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { catchError, map, throwError } from "rxjs";
import { jwtDecode } from "jwt-decode";
import { environment } from "../../environments/environment";
let AuthApiService = class AuthApiService {
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
    updateUserGender(id, selectedGender) {
        return this.http.put(`${this.baseUrl}/users/${id}/gender`, {
            gender: selectedGender,
        });
    }
    updateUserAge(id, age) {
        return this.http.put(`${this.baseUrl}/users/${id}/age`, { age });
    }
    updateUserBio(id, bio) {
        return this.http.put(`${this.baseUrl}/users/${id}/bio`, { bio });
    }
    updateUserDisorder(id, developmentalDisorder) {
        return this.http.put(`${this.baseUrl}/users/${id}/disorder`, {
            developmentalDisorder,
        });
    }
    removeUserAge(id) {
        return this.http.put(`${this.baseUrl}/users/${id}/age/remove`, {});
    }
    updateUserSexuality(id, selectedSexuality) {
        return this.http.put(`${this.baseUrl}/users/${id}/sexuality`, {
            sexuality: selectedSexuality,
        });
    }
    getGenderPrivacyStatusById(id) {
        return this.http.get(`${this.baseUrl}/users/${id}/genderprivacy`);
    }
    updateGenderPrivacyStatusById(id, isGenderPublic) {
        return this.http.put(`${this.baseUrl}/users/${id}/genderprivacy`, {
            isGenderPublic,
        });
    }
    getNamePrivacyStatusById(id) {
        return this.http.get(`${this.baseUrl}/users/${id}/nameprivacy`);
    }
    updateNamePrivacyStatusById(id, isNamePublic) {
        return this.http.put(`${this.baseUrl}/users/${id}/nameprivacy`, {
            isNamePublic,
        });
    }
    getDisorderPrivacyStatusById(id) {
        return this.http.get(`${this.baseUrl}/users/${id}/disorderprivacy`);
    }
    updateDisorderPrivacyStatusById(id, isDisorderPublic) {
        return this.http.put(`${this.baseUrl}/users/${id}/disorderprivacy`, {
            isDisorderPublic,
        });
    }
    getAgePrivacyStatusById(id) {
        return this.http.get(`${this.baseUrl}/users/${id}/ageprivacy`);
    }
    updateAgePrivacyStatusById(id, isAgePublic) {
        return this.http.put(`${this.baseUrl}/users/${id}/ageprivacy`, {
            isAgePublic,
        });
    }
    getSexualityPrivacyStatusById(id) {
        return this.http.get(`${this.baseUrl}/users/${id}/sexualityprivacy`);
    }
    updateSexualityPrivacyStatusById(id, isSexualityPublic) {
        return this.http.put(`${this.baseUrl}/users/${id}/sexualityprivacy`, {
            isSexualityPublic,
        });
    }
    updateNewUserStatus(id) {
        return this.http.put(`${this.baseUrl}/users/${id}/newuserstatus`, {});
    }
    getProfileImages() {
        return this.http.get(`${this.baseUrl}/users/profile/images`);
    }
    selectProfileImage(id, profileImage) {
        return this.http.put(`${this.baseUrl}/users/${id}/image`, { profileImage });
    }
    checkUserNameAvailable(userName) {
        const body = {
            userName: userName,
        };
        return this.http.post(`${this.baseUrl}/auth/usernameavailable`, body);
    }
};
AuthApiService = __decorate([
    Injectable({
        providedIn: "root",
    })
], AuthApiService);
export { AuthApiService };
//# sourceMappingURL=auth-api.service.js.map