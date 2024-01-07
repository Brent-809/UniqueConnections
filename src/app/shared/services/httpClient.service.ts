import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export class HttpClientService {
  constructor(private http: HttpClient) {}

  createAuthorizationHeader(httpHeaders: Headers) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Basic ${environment.apiKey}`,
    });
  }

  get(url: any) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers,
    });
  }

  post(url: any, data: any) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers,
    });
  }
}
