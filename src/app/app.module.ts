import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { EmploginComponent } from './Auth/login/emplogin/emplogin.component';
import { RecruiterloginComponent } from './Auth/login/recruiterlogin/recruiterlogin.component';
import { RegisComponent } from './Auth/regis/regis.component';
import { EmpregisterComponent } from './Auth/regis/empregister/empregister.component';
import { RecruiterregisterComponent } from './Auth/regis/recruiterregister/recruiterregister.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SeekerModule } from './seeker/seeker.module';
import { HttpClientModule } from '@angular/common/http';
import { RecruiterModule } from './recruiter/recruiter.module';
import { EditProfileComponent } from './seeker/edit-profile/edit-profile.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmploginComponent,
    RecruiterloginComponent,
    RegisComponent,
    EmpregisterComponent,
    RecruiterregisterComponent,
    NavbarComponent,
    //EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    SeekerModule,
    RecruiterModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
