import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RegistrationService {
  private registrationDataSubject = new Subject<any>();
  registrationData$ = this.registrationDataSubject.asObservable();
  private _registrationData: any = {};
  private _pageNumber!: number;

  get registrationData(): any {
    return this._registrationData;
  }

  set registrationData(data: any) {
    data.pageNumber = this._pageNumber;

    this._registrationData = data;
    this.registrationDataSubject.next(data);
    this.saveToLocalStorage(data);
  }

  get pageNumber(): number {
    return this._pageNumber;
  }

  set pageNumber(page: number) {
    this._pageNumber = page;
    this.saveToLocalStorage(this._registrationData); // Ensure that the localStorage is updated when pageNumber changes
  }

  constructor() {
    // Load data from local storage on service initialization
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage(data: any): void {
    localStorage.setItem("registrationData", JSON.stringify(data));
  }

  private loadFromLocalStorage(): void {
    const storedData = localStorage.getItem("registrationData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      this._pageNumber = parsedData.pageNumber || 1; // Set a default value if not available
      this._registrationData = parsedData;
      this.registrationDataSubject.next(parsedData);
    } else {
      // If there is no stored data, set a default page number
      this._pageNumber = 1;
      this.saveToLocalStorage(this._registrationData); // Save default value to localStorage
    }
  }

  getPageNumber(): number {
    return this.pageNumber;
  }
}
