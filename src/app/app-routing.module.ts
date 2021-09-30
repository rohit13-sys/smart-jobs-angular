import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmploginComponent } from './Auth/login/emplogin/emplogin.component';
import { LoginComponent } from './Auth/login/login.component';
import { RecruiterloginComponent } from './Auth/login/recruiterlogin/recruiterlogin.component';
import { EmpregisterComponent } from './Auth/regis/empregister/empregister.component';
import { RecruiterregisterComponent } from './Auth/regis/recruiterregister/recruiterregister.component';
import { RegisComponent } from './Auth/regis/regis.component';
import { REditPostJobComponent } from './recruiter/redit-post-job/redit-post-job.component';
import { PostjobComponent } from './recruiter/postjob/postjob.component';
import { ProfileComponent } from './recruiter/profile/profile.component';
import { AppliedEmployeesComponent } from './recruiter/rdashboard/applied-employees/applied-employees.component';
import { RdashboardComponent } from './recruiter/rdashboard/rdashboard.component';
import { RPostedjobsComponent } from './recruiter/rdashboard/rpostedjobs/rpostedjobs.component';

import { AppliedjobsComponent } from './seeker/dashboard/appliedjobs/appliedjobs.component';
import { DashboardComponent } from './seeker/dashboard/dashboard.component';
import { EditProfileComponent } from './seeker/edit-profile/edit-profile.component';

import { JobSearchComponent } from './seeker/job-search/job-search.component';
import { SeekerProfileComponent } from './seeker/seeker-profile/seeker-profile.component';
import { SeekerModule } from './seeker/seeker.module';

const routes: Routes = [
  { path: '', redirectTo: 'login/emp_login', pathMatch: 'full' },
  {
    path:'recruiterDashboard',component:RdashboardComponent,
    children:[
      {
        path:'postjob',component:PostjobComponent
      },
      { 
        path: 'myJobs', component: RPostedjobsComponent,   
      },
      {
        path:'appliedSeekers/:jobPostId',component:AppliedEmployeesComponent
      },
      {
        path:'updateJob/:jobPostId',component:REditPostJobComponent
      },
      {
        path: '',redirectTo:'myJobs',pathMatch:'full'
      }
    ],
  },
    {path: 'login', component: LoginComponent, children: [
      { path: 'emp_login', component: EmploginComponent },
      { path: 'rec_login', component: RecruiterloginComponent }
    ]
  },
  {
    path: 'register', component: RegisComponent, children: [
      { path: 'emp_register', component: EmpregisterComponent },
      { path: 'rec_register', component: RecruiterregisterComponent }
    ]
  },



  { path: 'redit-profile', component: EditProfileComponent },
  { path: 'search', component: JobSearchComponent },
  { path: 'applied-jobs', component: AppliedjobsComponent },
  { path: 'seeker-profile', component: SeekerProfileComponent },
  { path: 'rprofile', component: ProfileComponent},

  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'edit-profile', component: EditProfileComponent },
      { path: 'search', component: JobSearchComponent },
      { path: 'applied-jobs', component: AppliedjobsComponent },
    ]
     
    }
      
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LoginComponent,
  EmploginComponent,
  RecruiterloginComponent,
  RegisComponent,
  EmpregisterComponent,
  RecruiterregisterComponent,
  DashboardComponent
]
