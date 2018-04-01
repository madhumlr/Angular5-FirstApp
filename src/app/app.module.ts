import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BannerComponent } from './home/banner.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import { Section1Component } from './home/section1.component';
import { Section2Component } from './home/section2.component';
import { ApplicationComponent } from './application/application.component';
import { PersonalInfoComponent } from './application/personal.info.component';
import { AddressInfoComponent } from './application/address.info.component';
import { DriverComponent } from './Other/driver.component';
import { ValidationErrorsComponent } from './helpers/validation-errors';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    Section1Component,
    Section2Component,
    HomeComponent,
    ApplicationComponent,
    PersonalInfoComponent,
    AddressInfoComponent,
    DriverComponent,
    ValidationErrorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
