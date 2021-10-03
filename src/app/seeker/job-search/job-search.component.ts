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
  eMessage:string= ''
  jobs : Job[]=[];
  jobApplied:AppliedJob[]=[]
  appliedJobStatus:AppliedJob=new AppliedJob();
  appliedJobStatus1:AppliedJob[]=[]
  isSearchEmpty: boolean = true;
  input1: string = "";
  input2: string = "";
  isApplied:boolean = false 
  constructor(private joblist:SearchJobService,private logins:LoginService,private jobst:SearchJobService) {}
 
  ngOnInit(): void {
    this.email = sessionStorage.getItem('email')!
    console.log(this.email);
    this.fetchJobs()
  }

  fetchJobs(){
    this.joblist.getServerPostedJobs().subscribe((data)=>{
      this.jobs=data
      this.joblist.getAppliedJobsByid(this.email).subscribe((data1)=>{
        this.jobApplied=data1
        console.log(this.jobApplied);
        var arr = new Array<number>();          
        for(let j of this.jobApplied){
          arr.push(this.jobs.findIndex((job)=>job.jobPostId==j.jobPost.jobPostId))
        }
        console.log("arr",arr);
        
        for(let k of arr){
          this.jobs[k].isApplied = true
        }
        console.log("jobs: ",this.jobs);
        
      },(error)=>{
        console.log(error)
      });      
    },(error)=>{
      this.errorMessage="Something bad happened;please try again leter!!!";
      console.log(error)
    });
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
              this.errorMessage = ''
              this.fetchJobs()
              document.body.scrollTop = document.documentElement.scrollTop = 0;
              },
              (error)=>{
                if(error.status == 409){
                  console.log("hell");
                  
                  this.errorMessage = "You have Already Applied for this job"
                }
                else{
                  this.errorMessage = "Something bad happened."
                }
              })
            }
    }
} 



