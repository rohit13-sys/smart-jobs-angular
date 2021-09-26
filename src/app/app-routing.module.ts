import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmploginComponent } from './Auth/login/emplogin/emplogin.component';
import { LoginComponent } from './Auth/login/login.component';
import { RecruiterloginComponent } from './Auth/login/recruiterlogin/recruiterlogin.component';
import { EmpregisterComponent } from './Auth/regis/empregister/empregister.component';
import { RecruiterregisterComponent } from './Auth/regis/recruiterregister/recruiterregister.component';
import { RegisComponent } from './Auth/regis/regis.component';
import { PostjobComponent } from './recuiter/postjob/postjob.component';
import { ProfileComponent } from './recuiter/profile/profile.component';
import { RdashboardComponent } from './recuiter/rdashboard/rdashboard.component';
import { RPostedjobsComponent } from './recuiter/rdashboard/rpostedjobs/rpostedjobs.component';
import { AppliedjobsComponent } from './seeker/dashboard/appliedjobs/appliedjobs.component';
import { DashboardComponent } from './seeker/dashboard/dashboard.component';

import { PostedjobsComponent } from './seeker/dashboard/postedjobs/postedjobs.component';
import { EditProfileComponent } from './seeker/edit-profile/edit-profile.component';
import { JobSearchComponent } from './seeker/job-search/job-search.component';
import { SeekerProfileComponent } from './seeker/seeker-profile/seeker-profile.component';
import { SeekerModule } from './seeker/seeker.module';

const routes: Routes = [
  {path:'',redirectTo:'login/emp_login',pathMatch:'full'},
  {path:'login',component:LoginComponent,children:[
    {path:'emp_login',component:EmploginComponent},
    {path:'rec_login',component:RecruiterloginComponent}
  ]},
  {path:'register',component:RegisComponent,children:[
    {path:'emp_register',component:EmpregisterComponent},
    {path:'rec_register',component:RecruiterregisterComponent}
  ]},


  
  {path:'posted-jobs',component:PostedjobsComponent},
  {path:'edit-profile',component:EditProfileComponent},
  {path:'search',component:JobSearchComponent},
  {path:'applied-jobs',component:AppliedjobsComponent},
  {path:'jobs',component:PostedjobsComponent},
  {path:'seeker-profile',component:SeekerProfileComponent},

  {path:'dashboard',component:DashboardComponent,children:[
    
  {path:'posted-jobs',component:PostedjobsComponent},
  {path:'edit-profile',component:EditProfileComponent},
  {path:'search',component:JobSearchComponent},
  {path:'applied-jobs',component:AppliedjobsComponent},
  {path:'jobs',component:PostedjobsComponent},
  {path:'seeker-profile',component:SeekerProfileComponent},
  ]},
  {
    path:'recruiterDashboard',component:RdashboardComponent,
    children:[
      {
        path:'postjob',component:PostjobComponent
      },
      { 
        path: 'myJobs', component: RPostedjobsComponent,   
      },
      {path:'rprofile',component:ProfileComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  LoginComponent,
  EmploginComponent,
  RecruiterloginComponent,
  RegisComponent,
  EmpregisterComponent,
  RecruiterregisterComponent,
  DashboardComponent
]
