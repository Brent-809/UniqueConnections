import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
let ApiInterceptorService = class ApiInterceptorService {
    constructor() {
        this.loading = false;
    }
    intercept(request, next) {
        // Add your API key to the headers
        const apiKey = environment.apiKey;
        const isMainApiRequest = request.url.startsWith(environment.apiUrl);
        if (isMainApiRequest) {
            this.modifiedRequest = request.clone({
                setHeaders: {
                    apiKey: apiKey,
                },
            });
        }
        else {
            if (request.url.startsWith(environment.onesignalApi)) {
                this.modifiedRequest = request.clone({
                    setHeaders: {
                        Authorization: `Basic ${environment.onesignalKey}`,
                    },
                });
            }
        }
        return next.handle(this.modifiedRequest);
        // Pass the modified request to the next interceptor or the HTTP handler
    }
};
ApiInterceptorService = __decorate([
    Injectable({
        providedIn: "root",
    })
], ApiInterceptorService);
export { ApiInterceptorService };
//# sourceMappingURL=api-interceptor.service.js.map