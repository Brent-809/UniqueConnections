import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GroupInfoResolver implements Resolve<any> {
  constructor() {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const groupId = route.params["id"];
  }
}
