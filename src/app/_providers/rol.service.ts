import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { ToasterService } from 'angular2-toaster';
@Injectable()
export class RolService extends BaseService {
  constructor(public http: HttpClient, toasterService: ToasterService) {
    super(http, 'roles', toasterService);
  }
}
