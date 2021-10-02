import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobSeeker } from 'src/app/pojo/job-seeker';
import { JobactivityService } from 'src/app/service/jobactivity.service';
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
  jobSeekers:JobSeeker[] = [];

  constructor(private route:ActivatedRoute,private router:Router,private jobActivity:JobactivityService) { }
  //constructor() { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('jobPostId')
    //this.jobSeeker = JobSeekers.find((jsk)=>jsk.seekerMail==this.id)

    console.log(this.id);
    
    this.jobActivity.findJobActivity(this.id).subscribe(
      (data)=>{
        this.jobSeekers = data
        console.log(this.jobSeekers);
        
      },
      (error)=>{
        console.log(error);
      });

    //this.jobSeekersNew = this.jobSeekers.filter((jsk)=>jsk.appliedFor==this.id)
    console.log(this.jobSeekersNew);
    
  }

}
