import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserRoutingModule } from './list-user-routing.module';
import { ListUserComponent } from './list-user.component';
import { UserService } from '../../_providers/user.service';
import { NewComponent } from './new/new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RolService } from '../../_providers/rol.service';
import { PermissionService } from '../../_providers/permission.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ListUserRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ListUserComponent, NewComponent],
  providers: [UserService, PermissionService, RolService]
})
export class ListUserModule { }
