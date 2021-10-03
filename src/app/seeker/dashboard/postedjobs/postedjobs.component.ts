import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { SearchJobService } from 'src/app/service/search-job.service';
import { AppliedJob } from '../../job-search/appliedJob';
import { Job } from '../../job-search/job';


@Component({
  selector: 'app-postedjobs',
  templateUrl: './postedjobs.component.html',
  styleUrls: ['./postedjobs.component.css']
})
export class PostedjobsComponent implements OnInit {

  arrayvalue:any
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
                  document.body.scrollTop = document.documentElement.scrollTop = 0;
                }
                else{
                  this.errorMessage = "Something bad happened."
                  document.body.scrollTop = document.documentElement.scrollTop = 0;
                }
              })
            }
    }
  }