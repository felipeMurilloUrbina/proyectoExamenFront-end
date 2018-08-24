import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from '../../../_providers/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user: any;
  constructor(public service: UserService) {
    const helper = new JwtHelperService();
    const token = localStorage.getItem('token');
    const decodedToken = helper.decodeToken(token);
   }

  ngOnInit() {

    if (localStorage.getItem('profile')) {
      this.user = JSON.parse(localStorage.getItem('profile'));
    } else {
      this.getProfile();
    }
  }

  getProfile() {
    this.service.getProfile(this.user.nameid).subscribe(data => {
      localStorage.removeItem('profile');
      localStorage.setItem('profile', JSON.stringify(data['profile']));
    });
  }
}
