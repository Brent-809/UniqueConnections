import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }

    // Check if the token is expired
    const decodedToken: any = jwt_decode(token);
    const now = Date.now().valueOf() / 1000;
    if (decodedToken.exp < now) {
      return false;
    }

    return true;
  }
}
