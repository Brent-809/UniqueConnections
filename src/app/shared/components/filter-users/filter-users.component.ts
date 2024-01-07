import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.scss'],
})
export class FilterUsersComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onSearchChange(event: any) {
    
  }
  
  async openFilterModal() {
    const modal = await this.modalCtrl.create({
      component: FilterUsersComponent,
    });
    modal.present();
  }
}
