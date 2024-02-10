import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RegistrationService {
  private registrationDataSubject = new Subject<any>();
  registrationData$ = this.registrationDataSubject.asObservable();
  private _registrationData: any = {};

  get registrationData(): any {
    return this._registrationData;
  }

  set registrationData(data: any) {
    this._registrationData = data;
    this.registrationDataSubject.next(data);
    this.saveToLocalStorage(data);
  }

  constructor() {
    // Load data from local storage on service initialization
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage(data: any): void {
    localStorage.setItem("registrationData", JSON.stringify(data));
  }

  removeFromLocalstorage() {
    localStorage.removeItem("registrationData");
  }

  private loadFromLocalStorage(): void {
    const storedData = localStorage.getItem("registrationData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      this._registrationData = parsedData;
      this.registrationDataSubject.next(parsedData);
    } else {
      this.saveToLocalStorage(this._registrationData);
    }
  }
}
