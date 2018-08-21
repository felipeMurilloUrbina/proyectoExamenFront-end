import { StructComponent } from './struct.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { StructRoutingModule } from './struct-routing.module';

@NgModule({
  imports: [
    StructRoutingModule,
    CommonModule
  ],
  declarations: [StructComponent, MenuComponent, ContentComponent, FooterComponent, HeaderComponent],
  exports: [StructComponent]
})
export class StructModule { }
