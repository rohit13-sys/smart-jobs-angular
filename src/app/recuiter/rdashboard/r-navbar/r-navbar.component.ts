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
}
