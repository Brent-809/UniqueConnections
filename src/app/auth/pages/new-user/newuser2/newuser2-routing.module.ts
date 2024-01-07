import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Newuser2Page } from './newuser2.page';

const routes: Routes = [
  {
    path: '',
    component: Newuser2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Newuser2PageRoutingModule {}
