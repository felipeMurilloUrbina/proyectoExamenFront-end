import { Component, OnInit } from '@angular/core';
import { RolService } from '../../_providers/rol.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  roles: any[] = [];
  constructor(public service: RolService) { }

  ngOnInit() {
    this.get();
  }
  get() {
    this.service.getAll(1,0).subscribe(data => {
      this.roles = data['items'];
      console.log(data);
    });
  }
}
