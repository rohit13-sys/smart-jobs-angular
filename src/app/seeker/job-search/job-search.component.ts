import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/pojo/login';
import { SearchJobService } from 'src/app/service/search-job.service';
import { AppliedJob } from './appliedJob';
import { Job } from './job';
import { EmploginComponent } from 'src/app/Auth/login/emplogin/emplogin.component';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent implements OnInit {
  value1:any='';
  email:string = ''
  k:any = 0
  ApplySuccess:any=false
  ApplyFail:any=false
  errorMessage: string=''
  jobs : Job[]=[];
  appliedJobStatus:AppliedJob=new AppliedJob();
  appliedJobStatus1:AppliedJob[]=[]
  isSearchEmpty: boolean = true;
  input1: string = "";
  input2: string = "";
  constructor(private joblist:SearchJobService,private logins:LoginService,private jobst:SearchJobService) {}
 
  ngOnInit(): void {
    // console.log(this.jobst.appliedJobs)
    // this.jobst.getAllAppliedJobs().subscribe((d)=>{
    //   console.log(d)
    //   // this.appliedJobStatus1=d
    //   this.jobst.appliedJobs=d
    //   this.appliedJobStatus1=this.jobst.appliedJobs
    //   console.log(this.jobst.appliedJobs);
    // },(error)=>{
    //   console.log(error)
    // });
    this.email = sessionStorage.getItem('email')!
    console.log(this.email);
    if(this.email!=null){
      this.joblist.getServerPostedJobs().subscribe((data)=>{
        this.jobs=data
        // for(let j of this.jobs){
        //   console.log(this.appliedJobStatus1)
        //   for(let i of this.appliedJobStatus1){
        //     this.k=1;
        //     console.log("in")
        //     console.log(i.jobStatus)
        //     if(j.jobPostId===i.jobPost.jobPostId){
        //     if(i.jobStatus==="Applied"){
        //          j.button='Applied';
        //          j.isDisable=true;}}
        //     }
        //     if(this.k===0){ console.log(this.k); j.button="Apply"}
        //   }        
      },(error)=>{
        this.errorMessage=error;
        console.log(error)
      });
    }else{
      this.errorMessage = "You are logged out kindly login!!!"
    }
  }

  search(searchForm: NgForm){
    this.value1=searchForm.value.input1;  
    if(this.value1 != ""){
     this.jobs = this.jobs.filter(res=>{
        if(this.value1.toLowerCase().match(res.employee.company.companyName.toLowerCase())){
          return res.employee.company.companyName.toLowerCase().match(this.value1.toLowerCase());}
         else if(res.jobRole.toLowerCase().match(this.value1.toLowerCase())){
           return res.jobRole.toLowerCase().match(this.value1.toLowerCase());
         } 
        else 
        var string:string ='';
            for(let s of res.skills){
                console.log(s.skillName);
                string=s.skillName+string;
            }
          return string.toLowerCase().match(this.value1.toLowerCase());
          })
           
     }
    else if(this.value1 == ""){
      this.ngOnInit();
    }
  }

  apply(data:any){
    //console.log(data);
      this.appliedJobStatus.jspersonal.login.userId = this.email
      this.appliedJobStatus.jobPost.jobPostId=data
      this.appliedJobStatus.applyDate=new Date()
      this.appliedJobStatus.jobStatus="Applied"
      
      console.log(this.appliedJobStatus);
      if(confirm("Do you really want to apply for this Job")){
        this.joblist.addAppliedJob(this.appliedJobStatus)
            .subscribe((success) => {
              console.log(success);
              alert("You applied successfully")
              this.ApplySuccess=true;
              document.body.scrollTop = document.documentElement.scrollTop = 0;
              // for(let j of this.jobs){
              //  if(j.jobPostId===data){
              //     j.button="Applied"
              //     j.isDisable=true;
              //   }
              // }
              },
              (error)=>{
                if(error.status == 409){
                  console.log("hell");
                  
                  this.errorMessage = "You have Already Applied for this job"
                  document.body.scrollTop = document.documentElement.scrollTop = 0;
                }
                else{
                  this.errorMessage = "Something bad happened."
                  document.body.scrollTop = document.documentElement.scrollTop = 0;
                }
                // this.ApplyFail=true;
              })
            }
    }
} 



