import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  
//     {path: 'login', component: LoginComponent, children: [
//       { path: 'emp_login', component: EmploginComponent },
//       { path: 'rec_login', component: RecruiterloginComponent },
//       {path: '',redirectTo: 'emp_login',pathMatch:'full'}
//     ]
//   },
  
 
      
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SeekerRoutingModule { }
