import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SeekerProfileComponent } from './seeker-profile/seeker-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppliedjobsComponent } from './dashboard/appliedjobs/appliedjobs.component';

import { PostedjobsComponent } from './dashboard/postedjobs/postedjobs.component';
import { JobSearchComponent } from './job-search/job-search.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SeekerProfileComponent,
    EditProfileComponent,
    AppliedjobsComponent,
    JobSearchComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    SeekerProfileComponent,
    EditProfileComponent,
    JobSearchComponent,
    DashboardComponent,
   

  ]
})
export class SeekerModule { }
