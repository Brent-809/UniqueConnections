import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { AuthApiService } from "../../auth/auth-api.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(
    private apiService: AuthApiService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.apiService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(["/welcome"]);
      return false;
    }
  }
}
