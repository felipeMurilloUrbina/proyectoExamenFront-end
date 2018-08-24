import { Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ToasterService } from 'angular2-toaster';
import { User } from '../_models/user.model';
declare var $: any;

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(private http: HttpClient, private toasterService: ToasterService) {
    }

    login(user: User) {
        let body = 'username=' + user.userName + '&password=' + user.password + '&grant_type=password&client_id=' + environment.appId;
        return this.http.post<any>(environment.urlBase + 'token',
                body,
                { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
            .pipe(map((res: any) => {
                // login successful if there's a jwt token in the response
                if (res && res.access_token) {
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('token',  res.access_token);
                    return true;
                }
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
        location.reload(true);
    }
    sendMessage(option, title, message) {
        this.toasterService.pop(option, title, message);
    }

    show() {
        $(document).ready(() => {
          $('body').waitMe({
            effect: 'bounce',
            text: 'Cargando...',
            bg: 'rgba(116, 116, 122, 0.58)',
            color: '#1c1f1f',
            maxSize: '',
            waitTime: -1,
            source: '',
            textPos: 'vertical',
            fontSize: '18',
            onClose: function () {}
          });
        });
    }

    hide() {
        $(document).ready(() => {
          $('body').waitMe('hide');
          // $('').waitMe('hide');
        });
    }
}
