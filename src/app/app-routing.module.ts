import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliedEmployeesComponent } from './recruiter/rdashboard/applied-employees/applied-employees.component';
import { PostedjobsComponent } from './recruiter/rdashboard/postedjobs/postedjobs.component';
// import { DashboardComponent } from './seeker/dashboard/dashboard.component';
// import { JobsComponent } from './seeker/dashboard/jobs/jobs.component';

const routes: Routes = [
  // {path:'navbar',component:NavbarComponent},
  // //{path:'',redirectTo:'navbar',pathMatch:'full'},

  // // {path: 'dashboard', component:DashboardComponent,children:[
  // // {path: 'jobs', component:JobsComponent}]}
  { 
    path:'',redirectTo:'login/emplogin',pathMatch:'full'
  },
  // {
  //   path:'login',component:LoginComponent,
  //   children:[
  //     {
  //       path:'emplogin',component:EmploginComponent
  //     },
  //     {
  //       path:'recruiterlogin',component:RecruiterloginComponent
  //     }
  // ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents = [DashboardComponent,JobsComponent]
