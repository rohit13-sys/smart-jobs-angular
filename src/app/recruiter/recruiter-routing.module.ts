import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostjobComponent } from './postjob/postjob.component';
import { AppliedEmployeesComponent } from './rdashboard/applied-employees/applied-employees.component';
import { PostedjobsComponent } from './rdashboard/postedjobs/postedjobs.component';

const routes: Routes = [
    { 
        path: 'myJobs', component: PostedjobsComponent,
        
    },
    { 
        path: 'appliedSeekers',component: AppliedEmployeesComponent 
    },
    {
        path:'appliedSeekers/:jobPostId',component:AppliedEmployeesComponent
    },
    {
        path:'postjob',component:PostjobComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule { }
//export const routingComponents = [PostedjobsComponent,AppliedEmployeesComponent]
