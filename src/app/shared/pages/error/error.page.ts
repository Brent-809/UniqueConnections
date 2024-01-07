import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { LoadingPage } from "src/app/shared/overlays/loading/loading.page";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-error",
  templateUrl: "./error.page.html",
  styleUrls: ["./error.page.scss"],
})
export class ErrorPage implements OnInit {

  constructor(private http: HttpClient, private router: Router, private modalController: ModalController) {}

  ngOnInit() {
    this.makeRequest();
  }

  async makeRequest() {
    const apiUrl = environment.apiUrl;
    const loading = await this.modalController.create({
      component: LoadingPage,
    });
    await loading.present();

    this.http.get(apiUrl).subscribe(
      async () => {
        this.router.navigateByUrl("/");
        await loading.dismiss();
      },
      async (error) => {
        // Handle error
        console.error(error);
        this.router.navigateByUrl("/error");
        await loading.dismiss();
      }
    );
  }
}
