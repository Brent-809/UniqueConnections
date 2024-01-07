import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.component.html',
  styleUrls: ['./refresher.component.scss'],
})
export class RefresherComponent{
  images: string[] = []; // Array to hold the paths of the static images
  refreshing: boolean = false; // Flag to indicate if the refresher is active

  constructor() {
    // Populate the images array with the paths of the static images
    for (let i = 1; i <= 10; i++) {
      this.images.push(`assets/images/frame${i}.png`);
    }
  }

  doRefresh(event: any) {
    this.refreshing = true;
    // Perform your refreshing logic here, such as making API requests

    // Simulate an asynchronous operation (you can replace this with your actual logic)
    setTimeout(() => {
      // Stop the refresher and reset the refreshing flag
      this.refreshing = false;
      event.target.complete();
    }, 2000);
  }
}
