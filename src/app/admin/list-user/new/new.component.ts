import { Component, OnInit } from '@angular/core';
import { User } from '../../../_models/user.model';
import { RolService } from '../../../_providers/rol.service';
import { PermissionService } from '../../../_providers/permission.service';
import { Rol } from '../../../_models/rol.model';
import { MessageStatus } from '../../../_models/message.enum';
declare var $: any;
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  user: User;
  rol: Rol;
  roles: any[] = [];
  permissions: any[] = [];
  constructor(public permissionService: PermissionService, public rolService: RolService) { 
    this.user = new User();
    this.rol = new Rol();
  }

  ngOnInit() {
    this.get();
  }

  onChange() {
    if (this.user.roleId === 'new') {
      this.getPermissions();
      $('#rolModal').modal({
        show: true,
        keyboard: false
      });
      $('.modal-backdrop').css('z-index', '-1');
    }
  }

  get() {
   this.rolService.getAll(1, 0).subscribe(data => {
    this.roles = data['items'];
    this.roles.push({
      'id': 'new',
      'name': 'Nuevo Rol'
    });
   });
  }

  getPermissions() {
    this.permissionService.getAll(1,0).subscribe( data =>{
      this.permissions = data['items'];
    });
  }

  saveRol() {
    console.log(this.rol);
    if ((this.rol.permissions) && (this.rol.permissions.length > 0)) {
      this.rolService.save(this.rol, '').subscribe(data => {
  
      });
    } else {
      this.rolService.sendMessage(MessageStatus.warning, 'Error', 'Debe Seleccionar al menos un permiso');
    }
  }
}
