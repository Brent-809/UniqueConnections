import { Component, ElementRef, OnInit } from '@angular/core';
import lottie from "lottie-web";
import { animationPath } from "./loading.animation";

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent  implements OnInit {

  private animationDuration: number = 4000; // Animation duration in milliseconds
  private animation: any; // Declare animation variable

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const animationContainer = this.elementRef.nativeElement.querySelector('#lottie-container');
    this.animation = lottie.loadAnimation({
      container: animationContainer,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: animationPath
    });
    this.playAnimationWithDuration();
  }

  private playAnimationWithDuration() {
    this.animation.play();
    setTimeout(() => {
    }, this.animationDuration);
  }

}
