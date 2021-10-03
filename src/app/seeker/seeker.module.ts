import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SeekerProfileComponent } from './seeker-profile/seeker-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppliedjobsComponent } from './dashboard/appliedjobs/appliedjobs.component';

import { PostedjobsComponent } from './dashboard/postedjobs/postedjobs.component';
import { JobSearchComponent } from './job-search/job-search.component';
import { SeekerRoutingModule } from './seeker-routing.module';


@NgModule({
  declarations: [
    DashboardComponent,
    SeekerProfileComponent,
    EditProfileComponent,
    AppliedjobsComponent,
    JobSearchComponent,
    PostedjobsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SeekerRoutingModule
  ],
  exports:[
    SeekerProfileComponent,
    EditProfileComponent,
    JobSearchComponent,
    DashboardComponent,
    PostedjobsComponent
  ]
})
export class SeekerModule { }
