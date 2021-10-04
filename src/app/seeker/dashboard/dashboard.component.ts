import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  email:string = ''
  
  constructor(private router:Router,private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.email = sessionStorage.getItem('semail')!
  }

  navigateProfile(){
    this.router.navigate(['seeker-profile']);
  }

  navigateEditProfile(){
    this.router.navigate(['edit-profile']);
  }

  navigateAppliedJobs(){
    this.router.navigate(['applied-jobs']);
  }

  navigateJobs(){
    this.router.navigate(['posted-jobs']);
  }

  navigateLogout(){
    sessionStorage.clear()
    this.router.navigate(['login/emp_login']);
  }

  navigateLogIn(){
    this.router.navigate(['login/emp_login']);
  }

  jobs()
  {
    console.log("clicked")
    this.router.navigate(['jobs'],{relativeTo:this.activeroute});
  }

  

}
