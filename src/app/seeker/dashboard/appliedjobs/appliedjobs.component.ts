import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../service/job';
import { Jobs } from '../service/jobs';

@Component({
  selector: 'app-appliedjobs',
  templateUrl: './appliedjobs.component.html',
  styleUrls: ['./appliedjobs.component.css']
})
export class AppliedjobsComponent implements OnInit {

  // id:number|string|null=0;
  // job:Job|undefined= new Job();
  jobApplied:Job[] = Jobs;

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    // this.id = this.route.snapshot.paramMap.get('id');
    // console.log(this.id);
    // this.jobApplied = Jobs.filter((japplied)=>japplied.id==this.id);
    // console.log(this.jobApplied);
    
    
  }

}
