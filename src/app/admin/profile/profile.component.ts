import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../../_providers/user.service';
import { User } from '../../_models/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MessageStatus } from '../../_models/message.enum';
declare var $: any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  user: any;
  helper: JwtHelperService;
  @ViewChild('btnClose') btnClose : ElementRef;
  constructor(public service: UserService) {
    this.helper = new JwtHelperService();
    const token = localStorage.getItem('token');
    this.user = this.helper.decodeToken(token);
    console.log(this.user);
    // this.user = new User();
  }

  ngOnInit() {
    if (localStorage.getItem('profile')) {
      this.user = JSON.parse(localStorage.getItem('profile'));
      console.log(this.user);
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

  changeAvatar() {
    $('#avatarModal').modal({
      show: true,
      keyboard: false
    });
    $('.modal-backdrop').css('z-index', '-1');
  }

  updateProfile() {
    this.service.save(this.user, '').subscribe(data => {
      this.service.sendMessage(MessageStatus.ok, 'Ok', data);
    });
  }

  uploadAvatar() {
    const avatar={
      'image64': this.croppedImage
    };
    this.service.save(avatar, 'avatar').subscribe(data => {
      this.service.sendMessage(MessageStatus.ok, 'Ok', data);
      $('.avatar').attr('src',this.croppedImage);
      this.btnClose.nativeElement.click();
      this.getProfile();
    });
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(image: string) {
    this.croppedImage = image;
  }
  imageLoaded() {
      // show cropper
  }
  loadImageFailed() {
      // show message
  }
}
