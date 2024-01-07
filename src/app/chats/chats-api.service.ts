import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, map, tap, throwError } from "rxjs";
import { jwtDecode } from "jwt-decode";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";

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

export interface PersonalMessage {
  content: string;
  sender: string;
  receiver: string;
  timestamp?: Date;
}

@Injectable({
  providedIn: "root",
})
export class ChatsApiService {
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

  generateUserGroupId() {
    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 10000);
    return `${timestamp}${random}`;
  }

  getGroupById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/groups/${id}`).pipe(
      tap((response: any) => {}),
      map((response: any) => {
        if (response) {
          return response;
        } else {
          console.error("Invalid API response:", response);
          return null;
        }
      }),
      catchError((error: any) => {
        console.error("API Error:", error);
        return throwError(error);
      })
    );
  }

  getGroups(): Observable<any> {
    return this.http.get(`${this.baseUrl}/groups/`);
  }

  getGroupId(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/groups/${id}`);
  }

  groupMembers({ id }: { id: string }): Observable<any> {
    return this.http.get(`${this.baseUrl}/groups/${id}/users/count`).pipe(
      catchError((error) => {
        console.error("Error in groupMembers:", error);
        throw error;
      })
    );
  }

  sendMessage({
    message,
    sender,
    groupId,
  }: {
    message: any;
    sender: string;
    groupId: string;
  }): Observable<any> {
    const userId = this.getUserIdFromToken();
    if (!userId) {
      console.error("User ID not found in token");
      return throwError("User ID not found");
    }

    const body = {
      content: message, // Assuming your poll content has a 'text' property
      sender: sender,
      groupId: groupId,
      timestamp: new Date(),
    };

    return this.http.post(`${this.baseUrl}/messages/${groupId}`, body);
  }

  sendPersonalMessage({
    message,
    sender,
    receiver,
  }: {
    message: any;
    sender: string;
    receiver: string;
  }): Observable<any> {
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
  getGroupMessages(groupId: string): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.baseUrl}/messages/${groupId}`);
  }

  getUserMessages(userId: string): Observable<PersonalMessage[]> {
    return this.http.get<PersonalMessage[]>(
      `${this.baseUrl}/messages/user/${userId}`
    );
  }

  getPrechosenProfileImages(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/profile-images`);
  }

  updatePrivacySettings(id: string, privacySettings: any): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/users/${id}/privacy`,
      privacySettings
    );
  }

  getProfileImages(): Observable<any> {
    return this.http.get<string[]>(`${this.baseUrl}/users/profile/images`);
  }

  getGroupsByuser(userId: string | undefined): Observable<any> {
    return this.http.get(`${this.baseUrl}/groups/${userId}/user/joined`);
  }

  addFriend(userFriendId: string): Observable<any> {
    const userId = this.getUserIdFromToken();
    if (!userId) {
      console.error("User ID not found in token");
      return throwError("User ID not found");
    }

    const body = {
      userFriendId: userFriendId,
      userId: userId,
    };

    return this.http.put(`${this.baseUrl}/users/friends/add`, body).pipe(
      catchError((error) => {
        console.error("Error adding friend:", error);
        return throwError(error);
      })
    );
  }

  confirmFriendship(userFriendId: string): Observable<any> {
    const userId = this.getUserIdFromToken();
    if (!userId) {
      console.error("User ID not found in token");
      return throwError("User ID not found");
    }

    const body = {
      userFriendId: userFriendId,
      userId: userId,
    };

    return this.http.put(`${this.baseUrl}/users/friends/confirm`, body).pipe(
      catchError((error) => {
        console.error("Error confirming friendship:", error);
        return throwError(error);
      })
    );
  }

  confirmFriendRequest(userFriendId: string): Observable<any> {
    const userId = this.getUserIdFromToken();
    if (!userId) {
      console.error("User ID not found in token");
      return throwError("User ID not found");
    }

    const body = {
      userFriendId: userFriendId,
      userId: userId,
    };

    return this.http.put(`${this.baseUrl}/users/friends/confirm`, body).pipe(
      catchError((error) => {
        console.error("Error confirming friend:", error);
        return throwError(error);
      })
    );
  }
}
