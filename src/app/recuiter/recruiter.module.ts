import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdashboardComponent } from './rdashboard/rdashboard.component';
import { AppliedEmployeesComponent } from './rdashboard/applied-employees/applied-employees.component';
import { RPostedjobsComponent } from './rdashboard/rpostedjobs/rpostedjobs.component';
import { RecruiterRoutingModule } from './recruiter-routing.module';
import { PostjobComponent } from './postjob/postjob.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { RNavbarComponent } from './rdashboard/r-navbar/r-navbar.component';



@NgModule({
  declarations: [
    RdashboardComponent,
    AppliedEmployeesComponent,
    RPostedjobsComponent,
    PostjobComponent,
    ProfileComponent,
    RNavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RecruiterRoutingModule,
    NgMultiSelectDropDownModule
  ],
  exports:[
    AppliedEmployeesComponent,
    RPostedjobsComponent,
    RdashboardComponent,
    PostjobComponent
  ]
})
export class RecruiterModule { }
