import { Component, ElementRef, OnInit } from "@angular/core";
import lottie from "lottie-web";
import { animationPath } from "./loading.animation";

@Component({
  selector: "app-splash",
  templateUrl: "./splash.page.html",
  styleUrls: ["./splash.page.scss"],
})
export class SplashPage implements OnInit {
  private animationDuration: number = 4000;
  private animation: any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const animationContainer =
      this.elementRef.nativeElement.querySelector("#lottie-container");
    this.animation = lottie.loadAnimation({
      container: animationContainer,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: animationPath,
    });
    this.playAnimationWithDuration();
  }

  private playAnimationWithDuration() {
    this.animation.play();
    setTimeout(() => {}, this.animationDuration);
  }
}
