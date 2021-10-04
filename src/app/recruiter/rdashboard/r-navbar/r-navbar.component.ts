import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-r-navbar',
  templateUrl: './r-navbar.component.html',
  styleUrls: ['./r-navbar.component.css']
})
export class RNavbarComponent implements OnInit {

  email:string = ''
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.email = sessionStorage.getItem('email')!
  }

  goToMyJobs(){
    this.router.navigate(['recruiterDashboard/myJobs'])
  }
  goToPostJob(){
    this.router.navigate(['recruiterDashboard/postjob'])
  }

  navigateProfile(){
    this.router.navigate(['rprofile']);
  }

  navigateEditProfile(){
    this.router.navigate(['edit-profile']);
  }

  navigateLogout(){
    sessionStorage.clear()
    this.router.navigate(['login/emp_login']);
  }

  navigateLogIn(){
    this.router.navigate(['login/emp_login']);
  }
  
  logout(){
    this.router.navigate(['login/rec_login'])
  }
  profile(){
    this.router.navigate(['recruiterDashboard/rprofile'])
  }
}
