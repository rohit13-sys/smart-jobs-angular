import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostjobComponent } from './postjob/postjob.component';
import { AppliedEmployeesComponent } from './rdashboard/applied-employees/applied-employees.component';
import { RPostedjobsComponent } from './rdashboard/rpostedjobs/rpostedjobs.component';

const routes: Routes = [
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule { }
//export const routingComponents = [PostedjobsComponent,AppliedEmployeesComponent]
