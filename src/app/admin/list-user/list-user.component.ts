import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_providers/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: any[] = [];
  constructor(public service: UserService) { }

  ngOnInit() {
    this.get();
  }

  get() {
    this.service.getAll(1,0).subscribe(data => {
      this.users = data['items'];
      console.log(this.users, data);
    });
  }
}
