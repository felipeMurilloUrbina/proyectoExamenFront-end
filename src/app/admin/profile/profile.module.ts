import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { UserService } from '../../_providers/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ImageCropperModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
  ],
  declarations: [ProfileComponent],
  providers: [UserService]
})
export class ProfileModule { }
