import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";
let HttpClientService = class HttpClientService {
    constructor(http) {
        this.http = http;
    }
    createAuthorizationHeader(httpHeaders) {
        const headers = new HttpHeaders({
            "Content-Type": "application/json",
            Authorization: `Basic ${environment.apiKey}`,
        });
    }
    get(url) {
        const headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers,
        });
    }
    post(url, data) {
        const headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
            headers: headers,
        });
    }
};
HttpClientService = __decorate([
    Injectable()
], HttpClientService);
export { HttpClientService };
//# sourceMappingURL=httpClient.service.js.map