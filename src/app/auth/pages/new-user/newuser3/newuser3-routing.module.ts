import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Newuser3Page } from './newuser3.page';

const routes: Routes = [
  {
    path: '',
    component: Newuser3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Newuser3PageRoutingModule {}
