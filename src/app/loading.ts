import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class loading {
  loading: any;

  constructor(public loadingController: LoadingController) {}

  async presentLoading() {
    this.loading = true;
    return await this.loadingController.create({}).then((a) => {
      a.present().then(() => {
        if (!this.loading) {
          a.dismiss().then(() => console.log("abort presenting"));
        }
      });
    });
  }

  async hideLoading() {
    this.loading = false;
    return await this.loadingController
      .dismiss()
      .then(() => console.log("dismissed"));
  }
}
