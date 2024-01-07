import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, map, throwError } from "rxjs";
import { jwtDecode } from "jwt-decode";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";

export interface loginResponse {
  token: string;
  id: string;
}

@Injectable({
  providedIn: "root",
})
export class AuthApiService {
  baseUrl = environment.apiUrl;
  token!: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
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
  isLoggedIn(): boolean {
    return !!this.token;
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }

  getUserById(id: string | undefined): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${id}`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/create`, user).pipe(
      catchError((error) => {
        if (
          error.error.sqlMessage &&
          error.error.sqlMessage.includes("Duplicate entry") &&
          error.error.sqlMessage.includes("'username'")
        ) {
          return throwError(
            "Username already exists, please choose another one."
          );
        } else if (
          error.error.sqlMessage &&
          error.error.sqlMessage.includes("Duplicate entry") &&
          error.error.sqlMessage.includes("'email'")
        ) {
          return throwError(
            "Email address already exists, please use another one."
          );
        } else {
          return throwError("An unknown error occurred.");
        }
      })
    );
  }

  loginUser(user: any): Observable<loginResponse> {
    return this.http
      .post<loginResponse>(`${this.baseUrl}/auth/login`, user)
      .pipe(
        map((response) => {
          this.token = response.token;
          localStorage.setItem("token", this.token);
          return response;
        })
      );
  }

  getUserIdFromToken(): string | undefined {
    if (!this.token) {
      return undefined;
    }

    try {
      const decodedToken: any = jwtDecode(this.token);
      return decodedToken.userId;
    } catch (error) {
      console.error("Error decoding token:", error);
      return undefined;
    }
  }

  updateUser(id: string, user: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/${id}`, user);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/users/${id}`);
  }

  getVerifiedUserById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/verified/${id}`);
  }

  updateVerifiedStatusById(id: string, verified: boolean): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/verified/${id}`, { verified });
  }

  updateUserGender(id: string, selectedGender: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/${id}/gender`, {
      gender: selectedGender,
    });
  }

  updateUserAge(id: string, age: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/${id}/age`, { age });
  }

  updateUserBio(id: string, bio: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/${id}/bio`, { bio });
  }

  updateUserDisorder(
    id: string,
    developmentalDisorder: string
  ): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/${id}/disorder`, {
      developmentalDisorder,
    });
  }

  removeUserAge(id: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/${id}/age/remove`, {});
  }

  updateUserSexuality(id: string, selectedSexuality: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/${id}/sexuality`, {
      sexuality: selectedSexuality,
    });
  }

  getGenderPrivacyStatusById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${id}/genderprivacy`);
  }

  updateGenderPrivacyStatusById(
    id: string,
    isGenderPublic: boolean
  ): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/${id}/genderprivacy`, {
      isGenderPublic,
    });
  }

  getNamePrivacyStatusById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${id}/nameprivacy`);
  }

  updateNamePrivacyStatusById(
    id: string,
    isNamePublic: boolean
  ): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/${id}/nameprivacy`, {
      isNamePublic,
    });
  }

  getDisorderPrivacyStatusById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${id}/disorderprivacy`);
  }

  updateDisorderPrivacyStatusById(
    id: string,
    isDisorderPublic: boolean
  ): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/${id}/disorderprivacy`, {
      isDisorderPublic,
    });
  }

  getAgePrivacyStatusById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${id}/ageprivacy`);
  }

  updateAgePrivacyStatusById(
    id: string,
    isAgePublic: boolean
  ): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/${id}/ageprivacy`, {
      isAgePublic,
    });
  }

  getSexualityPrivacyStatusById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${id}/sexualityprivacy`);
  }

  updateSexualityPrivacyStatusById(
    id: string,
    isSexualityPublic: boolean
  ): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/${id}/sexualityprivacy`, {
      isSexualityPublic,
    });
  }

  updateNewUserStatus(id: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/${id}/newuserstatus`, {});
  }

  getProfileImages(): Observable<any> {
    return this.http.get<string[]>(`${this.baseUrl}/users/profile/images`);
  }

  selectProfileImage(id: string, profileImage: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/${id}/image`, { profileImage });
  }

  checkUserNameAvailable(userName: any): Observable<any> {
    const body = {
      userName: userName,
    };
    return this.http.post(`${this.baseUrl}/auth/usernameavailable`, body);
  }
}
