import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobSeeker } from '../job-seeker';
import { JobSeekers } from '../job-seekers';


@Component({
  selector: 'app-applied-employees',
  templateUrl: './applied-employees.component.html',
  styleUrls: ['./applied-employees.component.css']
})
export class AppliedEmployeesComponent implements OnInit {

  id:number|string|null = 0
  jobSeeker :JobSeeker | undefined = new JobSeeker()
  jobSeekersNew:JobSeeker[] = [];

  constructor(private route:ActivatedRoute,private router:Router) { }
  //constructor() { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('jobPostId')
    //this.jobSeeker = JobSeekers.find((jsk)=>jsk.seekerMail==this.id)

    console.log(this.id);
    
    this.jobSeekersNew = JobSeekers.filter((jsk)=>jsk.appliedFor==this.id)
    console.log(this.jobSeekersNew);
    
  }

}
