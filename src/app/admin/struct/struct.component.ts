import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_providers/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';
declare var $: any;
@Component({
  selector: 'app-struct',
  templateUrl: './struct.component.html',
  styleUrls: ['./struct.component.css']
})
export class StructComponent implements OnInit {
  user: any;
  helper: JwtHelperService;
  constructor(public service: UserService) {
    this.helper = new JwtHelperService();
    const token = localStorage.getItem('token');
    this.user = this.helper.decodeToken(token);
  }
  
  ngOnInit() {
    $("body").removeClass("body-login");
    this.service.getProfile(this.user.nameid).subscribe(data => {
      localStorage.removeItem('profile');
      localStorage.setItem('profile', JSON.stringify(data['profile']));
    });
  }

}
