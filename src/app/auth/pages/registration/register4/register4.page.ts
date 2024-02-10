import { Component, ElementRef, OnInit } from "@angular/core";
import { confirmAnimationPath } from "./confirmation.animation";
import lottie from "lottie-web";
import { RegistrationService } from "src/app/auth/registration.service";

@Component({
  selector: "app-register4",
  templateUrl: "./register4.page.html",
  styleUrls: ["./register4.page.scss"],
})
export class Register4Page implements OnInit {
  private animationDuration: number = 4000;
  private animation: any;

  constructor(
    private elementRef: ElementRef,
    private registerService: RegistrationService
  ) {}

  ngOnInit() {
    this.registerService.removeFromLocalstorage();
    const animationContainer =
      this.elementRef.nativeElement.querySelector("#lottie-container");
    this.animation = lottie.loadAnimation({
      container: animationContainer,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: confirmAnimationPath,
    });
    this.playAnimationWithDuration();
  }

  private playAnimationWithDuration() {
    this.animation.play();
    setTimeout(() => {}, this.animationDuration);
  }
}
