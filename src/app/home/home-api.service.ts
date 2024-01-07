import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, map, tap, throwError } from "rxjs";
import {jwtDecode} from "jwt-decode";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

export interface loginResponse {
  token: string;
  id: string;
}

export interface Message {
  content: string;
  sender: string;
  groupId: string;
  timestamp?: Date;
}

@Injectable({
  providedIn: "root",
})
export class HomeApiService {
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

  getGroups(): Observable<any> {
    return this.http.get(`${this.baseUrl}/groups/`);
  }

  getGroupId(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/groups/${id}`);
  }

  groupMembers(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/groups/${id}/users/count`).pipe(
      catchError((error) => {
        console.error("Error in groupMembers:", error);
        throw error;
      })
    );
  }

  joinGroup(groupId: string): Observable<any> {
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
}
