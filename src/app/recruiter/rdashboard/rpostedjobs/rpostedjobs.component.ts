import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employer } from 'src/app/pojo/employer';
import { EmployerServiceService } from 'src/app/service/employer-service.service';
import { PostedJobsServiceService } from 'src/app/service/posted-jobs-service.service';
import { Postedjob } from 'src/app/pojo/postedjob';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rpostedjobs',
  templateUrl: './rpostedjobs.component.html',
  styleUrls: ['./rpostedjobs.component.css']
})
export class RPostedjobsComponent implements OnInit {
  jobs:Postedjob[]|undefined
  errorMessage:string = ''
  id:any
  sMessage:string = ''
 // employee:Employer = new Employer()

  constructor(config: NgbModalConfig,private modalService: NgbModal,private route:ActivatedRoute,private postService:  PostedJobsServiceService,private router: Router,private empService: EmployerServiceService) { }

  viewSeekers(id:number){
    this.router.navigate(['../appliedSeekers',id],{relativeTo:this.route})
  }

  ngOnInit(): void {
    this.fetchJobs()
    // this.empService.getEmpById(this.employee.login.userId)
    // .subscribe((data)=>{
    //   this.employee = data
    //   console.log("emp:",this.employee);
      
    // },(error)=>{
    //   this.errorMessage = error
    // })
    
  }

  fetchJobs(){
    this.postService.getServerPostedJobs()
    .subscribe( (data)=>{
      this.jobs = data
      console.log("data:",this.jobs)
    },(error)=>{
      this.errorMessage = error
    })
  }

  deleteJob(id:number){
   // confirm("Do you really want to delete this JobPost:")
    this.postService.deleteJobById(id).subscribe((success)=>{
      console.info(success)
      this.sMessage = success;
      this.fetchJobs();
      //alert(this.sMessage)
    },(error)=>{
      console.error(error);
      this.errorMessage = error
    })
    this.router.navigate(['../myJobs'],{relativeTo:this.route})
  }

  updateJob(jobPostId:number){
    this.router.navigate(['../updateJob',jobPostId],{relativeTo:this.route})
  }

  open(content:any) {
    this.modalService.open(content);
  } 
}
