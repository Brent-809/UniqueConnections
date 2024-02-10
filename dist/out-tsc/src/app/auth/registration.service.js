import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
let RegistrationService = class RegistrationService {
    get registrationData() {
        return this._registrationData;
    }
    set registrationData(data) {
        this._registrationData = data;
        this.registrationDataSubject.next(data);
        this.saveToLocalStorage(data);
    }
    constructor() {
        this.registrationDataSubject = new Subject();
        this.registrationData$ = this.registrationDataSubject.asObservable();
        this._registrationData = {};
        // Load data from local storage on service initialization
        this.loadFromLocalStorage();
    }
    saveToLocalStorage(data) {
        localStorage.setItem("registrationData", JSON.stringify(data));
    }
    removeFromLocalstorage() {
        localStorage.removeItem("registrationData");
    }
    loadFromLocalStorage() {
        const storedData = localStorage.getItem("registrationData");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            this._registrationData = parsedData;
            this.registrationDataSubject.next(parsedData);
        }
        else {
            this.saveToLocalStorage(this._registrationData);
        }
    }
};
RegistrationService = __decorate([
    Injectable({
        providedIn: "root",
    })
], RegistrationService);
export { RegistrationService };
//# sourceMappingURL=registration.service.js.map