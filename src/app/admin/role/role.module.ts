import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role.component';
import { RolService } from '../../_providers/rol.service';

@NgModule({
  imports: [
    CommonModule,
    RoleRoutingModule
  ],
  declarations: [RoleComponent],
  providers: [RolService]
})
export class RoleModule { }
