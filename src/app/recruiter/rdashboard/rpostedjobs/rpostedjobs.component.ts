import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employer } from 'src/app/pojo/employer';
import { EmployerServiceService } from 'src/app/service/employer-service.service';
import { PostedJobsServiceService } from 'src/app/service/posted-jobs-service.service';
import { Postedjob } from 'src/app/pojo/postedjob';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-rpostedjobs',
  templateUrl: './rpostedjobs.component.html',
  styleUrls: ['./rpostedjobs.component.css']
})
export class RPostedjobsComponent implements OnInit {
  jobs:Postedjob[]|undefined
  empEmail:string|null = ''
  errorMessage:string = ''
  id:any
  sMessage:string = ''
 // employee:Employer = new Employer()

  constructor(config: NgbModalConfig,private modalService: NgbModal,private route:ActivatedRoute,private postService:  PostedJobsServiceService,private router: Router,private empService: EmployerServiceService,private log:LoginService) { }

  viewSeekers(id:number){
    this.router.navigate(['../appliedSeekers',id],{relativeTo:this.route})
  }

  ngOnInit(): void {
    //this.empEmail = this.route.snapshot.paramMap.get('emailId')
    // this.empEmail = this.log.getEmail()
    // console.log("email = "+this.empEmail);
    this.empEmail = sessionStorage.getItem('email')
    console.log("employee"+this.empEmail);
    
    this.fetchJobs(this.empEmail)
    // this.empService.getEmpById(this.employee.login.userId)
    // .subscribe((data)=>{
    //   this.employee = data
    //   console.log("emp:",this.employee);
      
    // },(error)=>{
    //   this.errorMessage = error
    // })
    
  }

  fetchJobs(empEmail:any){
    this.postService.getPostedJobsByEmail(empEmail)
    .subscribe( (data)=>{
      this.jobs = data
      if(this.jobs.length==0){
        this.errorMessage = "You haven't posted anything yet!!!"
      }
      console.log("data:",this.jobs)
    },(error)=>{
      this.errorMessage = "Something Bad Happend."
    })
  }

  deleteJob(id:number){
   // confirm("Do you really want to delete this JobPost:")
    this.postService.deleteJobById(id).subscribe((success)=>{
      console.info(success)
      this.sMessage = success;
      this.fetchJobs(this.empEmail);
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
