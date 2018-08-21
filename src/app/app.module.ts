import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing';
import { StructModule } from './admin/struct/struct.module';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToasterModule.forRoot(),
    StructModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: Location, useClass: HashLocationStrategy },
    HttpClient, HashLocationStrategy, ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
