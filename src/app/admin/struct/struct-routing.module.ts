import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StructComponent } from './struct.component';

const routes: Routes = [
    {
      path: '', component: StructComponent,
      children: [
        { path:'', redirectTo: 'perfil', pathMatch: 'full' },
        { path: 'perfil', loadChildren: '../profile/profile.module#ProfileModule' }
        // { path: 'list-usuarios', loadChildren: '../department/department.module#DepartmentModule' },
        // { path: 'usuarios', loadChildren: '../user/user.module#UserModule' },
        // { path: 'empleados', loadChildren: '../employee/employee.module#EmployeeModule'},
        // { path: 'noticias', loadChildren: '../new/new.module#NewModule'}
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructRoutingModule { }
