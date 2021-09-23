import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdashboardComponent } from './rdashboard/rdashboard.component';
import { AppliedEmployeesComponent } from './rdashboard/applied-employees/applied-employees.component';
import { PostedjobsComponent } from './rdashboard/postedjobs/postedjobs.component';
import { RecruiterRoutingModule } from './recruiter-routing.module';
import { PostjobComponent } from './postjob/postjob.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RdashboardComponent,
    AppliedEmployeesComponent,
    PostedjobsComponent,
    PostjobComponent,
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
    PostedjobsComponent,
    RdashboardComponent,
    PostjobComponent
  ]
})
export class RecruiterModule { }
