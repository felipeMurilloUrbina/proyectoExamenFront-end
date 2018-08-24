import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StructComponent } from './struct.component';

const routes: Routes = [
    {
      path: '', component: StructComponent,
      children: [
        { path: '', redirectTo: 'perfil', pathMatch: 'full' },
        { path: 'perfil', loadChildren: '../profile/profile.module#ProfileModule' },
        { path: 'usuarios', loadChildren: '../list-user/list-user.module#ListUserModule' },
        { path: 'roles', loadChildren: '../role/role.module#RoleModule' },
        { path: 'permisos', loadChildren: '../permission/permission.module#PermissionModule'},
        { path: 'reportes', loadChildren: '../reports/reports.module#ReportsModule'}
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructRoutingModule { }
