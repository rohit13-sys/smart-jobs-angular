import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-r-navbar',
  templateUrl: './r-navbar.component.html',
  styleUrls: ['./r-navbar.component.css']
})
export class RNavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToMyJobs(){
    this.router.navigate(['recruiterDashboard/myJobs'])
  }
  goToPostJob(){
    this.router.navigate(['recruiterDashboard/postjob'])
  }

  navigateProfile(){
    this.router.navigate(['seeker-profile']);
  }

  navigateEditProfile(){
    this.router.navigate(['edit-profile']);
  }

  navigateLogout(){
    this.router.navigate(['login/emp_login']);
  }

  
}
