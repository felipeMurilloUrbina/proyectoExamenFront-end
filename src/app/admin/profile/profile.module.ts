import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ImageCropperModule } from 'ngx-image-cropper';
@NgModule({
  imports: [
    CommonModule,
    ImageCropperModule,
    ProfileRoutingModule,
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
