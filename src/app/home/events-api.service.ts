import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { Events } from "../shared/interfaces/events.interface";

export interface EventCategories {
  name: string;
  icon: string;
}

@Injectable({
  providedIn: "root",
})
export class EventsApiService {
  baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  getAllEvents(): Observable<Events[]> {
    return this.http.get<Events[]>(`${this.baseUrl}/events`);
  }

  getEventById(id: string | null): Observable<Events[]> {
    return this.http.get<Events[]>(`${this.baseUrl}/events/id/${id}`);
  }

  createEvent(eventData: Events[]): Observable<Events[]> {
    return this.http.post<Events[]>(`${this.baseUrl}/events`, eventData);
  }

  createCategory(categoryData: any): Observable<EventCategories> {
    return this.http.post<EventCategories>(
      `${this.baseUrl}/events/categories`,
      categoryData
    );
  }

  getCategories(): Observable<EventCategories[]> {
    return this.http.get<EventCategories[]>(
      `${this.baseUrl}/events/categories`
    );
  }
}
