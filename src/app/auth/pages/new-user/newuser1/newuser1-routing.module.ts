import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Newuser1Page } from './newuser1.page';

const routes: Routes = [
  {
    path: '',
    component: Newuser1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Newuser1PageRoutingModule {}
