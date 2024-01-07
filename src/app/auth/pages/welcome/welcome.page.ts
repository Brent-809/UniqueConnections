import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RegistrationService } from "../../registration.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.page.html",
  styleUrls: ["./welcome.page.scss"],
})
export class WelcomePage implements OnInit {
  background = {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80)",
  };

  constructor(
    private router: Router,
    private registerService: RegistrationService
  ) {}

  ngOnInit() {}

  goToLogin() {
    this.router.navigate(["/login"]);
  }

  goToRegister() {
    // Access the page number directly from the service
    const pageNumber = this.registerService.pageNumber;

    // Navigate based on the page number
    switch (pageNumber) {
      case 0:
        this.router.navigate(["/register"]);
        break;
      case 1:
        this.router.navigate(["/register2"]);
        break;
      case 2:
        this.router.navigate(["/register3"]);
        break;
      case 3:
        this.router.navigate(["/register4"]);
        break;
      // Add more cases if needed

      default:
        this.router.navigate(["/register"]); // Default to the first page if no valid page number is found
    }
  }
}
