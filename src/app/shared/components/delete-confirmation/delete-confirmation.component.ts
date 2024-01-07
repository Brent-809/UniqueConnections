import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-delete-confirmation",
  templateUrl: "./delete-confirmation.component.html",
  styleUrls: ["./delete-confirmation.component.scss"],
})
export class DeleteConfirmationComponent implements OnInit {
  ngOnInit() {}

  constructor(private modalController: ModalController) {}

  async dismiss(confirmed: boolean): Promise<void> {
    await this.modalController.dismiss(confirmed);
  }
}
