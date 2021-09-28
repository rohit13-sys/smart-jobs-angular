import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Employer } from '../../employer';
import { EmployerServiceService } from '../../employer-service.service';
import { PostedJobsServiceService } from '../../posted-jobs-service.service';
import { Postedjob } from '../postedjob';

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
  employee:Employer = new Employer()
  message:string = ''

  constructor(config: NgbModalConfig,private modalService: NgbModal,private route:ActivatedRoute,private postService:  PostedJobsServiceService,private router: Router,private empService: EmployerServiceService) { config.backdrop = 'static';
  config.keyboard = false;}

  viewSeekers(id:number){
    this.router.navigate(['../appliedSeekers',id],{relativeTo:this.route})
  }

  ngOnInit(): void {
    this.fetchJobs()
    this.employee.login.userId = 'john@gmail.com'
    this.empService.getEmpById(this.employee.login.userId)
    .subscribe((data)=>{
      this.employee = data
    },(error)=>{
      this.errorMessage = error
    })
    
  }

  fetchJobs(){
    this.postService.getServerPostedJobs()
    .subscribe( (data)=>{
      this.jobs = data
    },(error)=>{
      this.errorMessage = error
    })
  }

  deleteJob(id:number){
    console.log("id:"+this.id);
    
    if(id){
      this.postService.deleteJobById(id).subscribe((success)=>{
        console.info(success)
        this.fetchJobs()
        this.sMessage = success
        //alert(this.sMessage)
      },(error)=>{
        console.error(error);
        this.errorMessage = error
      })
    }else{
      console.log("sorry id is undefined");
      
    }
      // window.location.reload()
      // this.sMessage = "Job deleted Successfully"
    this.router.navigate(['../myJobs'],{relativeTo:this.route})
  
  }

  updateJob(jobPostId:number){
    this.router.navigate(['../updateJob',jobPostId],{relativeTo:this.route})
  }
  open(content:any) {
    this.modalService.open(content);
  }
}
