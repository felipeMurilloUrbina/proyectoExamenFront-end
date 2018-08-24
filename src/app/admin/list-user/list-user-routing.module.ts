import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './list-user.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  { path: '', component: ListUserComponent  },
  { path: 'nuevo', component: NewComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ListUserRoutingModule { }
