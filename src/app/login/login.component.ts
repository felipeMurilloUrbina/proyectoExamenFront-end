import { User } from './../_models/user.model';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_providers/authentication.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(public router: Router, private service: AuthenticationService) {
    this.user = new User();
  }

  ngOnInit() {
  }

  login() {
    this.service.show();
    this.service.login(this.user).subscribe(dato => {
      this.service.hide();
      const helper = new JwtHelperService();
      const token= localStorage.getItem('token');
      const decodedToken = helper.decodeToken(token);
      this.router.navigate(['/admin']);
    });
  }
}
