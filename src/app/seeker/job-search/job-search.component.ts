import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/pojo/login';
import { SearchJobService } from 'src/app/service/search-job.service';
import { AppliedJob } from './appliedJob';
import { Job } from './job';
import { EmploginComponent } from 'src/app/Auth/login/emplogin/emplogin.component';
import { LoginService } from 'src/app/service/login.service';
import { PostedjobsComponent } from '../dashboard/postedjobs/postedjobs.component';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent implements OnInit {
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
  constructor(private joblist:SearchJobService,private logins:LoginService,private jobst:SearchJobService,private pjobs:PostedjobsComponent) {}
 
  ngOnInit(): void {
    // this.email = sessionStorage.getItem('email')!
    // console.log(this.email);
    // this.fetchJobs()
  }

  // fetchJobs(){
  //   this.joblist.getServerPostedJobs().subscribe((data)=>{
  //     this.jobs=data
  //     this.joblist.getAppliedJobsByid(this.email).subscribe((data1)=>{
  //       this.jobApplied=data1
  //       console.log(this.jobApplied);
  //       var arr = new Array<number>();          
  //       for(let j of this.jobApplied){
  //         arr.push(this.jobs.findIndex((job)=>job.jobPostId==j.jobPost.jobPostId))
  //       }
  //       console.log("arr",arr);
        
  //       for(let k of arr){
  //         this.jobs[k].isApplied = true
  //       }
  //       console.log("jobs: ",this.jobs);
        
  //     },(error)=>{
  //       console.log(error)
  //     });      
  //   },(error)=>{
  //     this.errorMessage="Something bad happened;please try again leter!!!";
  //     console.log(error)
  //   });
  // }

  search(searchForm: NgForm){
    this.value1=searchForm.value.input1;
    var array = this.value1.split(" ")
    console.log(array)  
    console.log(this.value1)
    if(this.value1 != ""){
      for(this.arrayvalue of array){
    //  this.jobs = this.jobs.filter(res=>{
      this.pjobs.jobs=this.pjobs.jobs.filter(res=>{
        if(this.value1.toLowerCase().match(res.employee.company.companyName.toLowerCase())){
          console.log("company")
          return res.employee.company.companyName.toLowerCase().match(this.value1.toLowerCase());}
         else if(res.jobRole.toLowerCase().match(this.value1.toLowerCase())){
           console.log("jobrole")
           return res.jobRole.toLowerCase().match(this.value1.toLowerCase());
         } 
        else
              console.log("skill")
              console.log(res)
              var string:string ='';
                for(let s of res.skills){
                  console.log(s.skillName);
                  string=s.skillName+string;
                }
                console.log(string.toLowerCase())
                console.log(this.arrayvalue.toLowerCase())
                if(string.toLowerCase().match(this.arrayvalue.toLowerCase())){
                    console.log("yes")}
            return string.toLowerCase().match(this.arrayvalue.toLowerCase());
          })
      }      
     }
    else if(this.value1 == ""){
      this.pjobs.ngOnInit();
    }
  }

  // apply(data:any){
  //   //console.log(data);
  //     this.appliedJobStatus.jspersonal.login.userId = this.email
  //     this.appliedJobStatus.jobPost.jobPostId=data
  //     this.appliedJobStatus.applyDate=new Date()
  //     this.appliedJobStatus.jobStatus="Applied"
      
  //     console.log(this.appliedJobStatus);
  //     if(confirm("Do you really want to apply for this Job")){
  //       this.joblist.addAppliedJob(this.appliedJobStatus)
  //           .subscribe((success) => {
  //             console.log(success);
  //             alert("You applied successfully")
  //             this.ApplySuccess=true;
  //             this.errorMessage = ''
  //             this.fetchJobs()
  //             document.body.scrollTop = document.documentElement.scrollTop = 0;
  //             },
  //             (error)=>{
  //               if(error.status == 409){
  //                 console.log("hell");
                  
  //                 this.errorMessage = "You have Already Applied for this job"
  //                 document.body.scrollTop = document.documentElement.scrollTop = 0;
  //               }
  //               else{
  //                 this.errorMessage = "Something bad happened."
  //                 document.body.scrollTop = document.documentElement.scrollTop = 0;
  //               }
  //             })
  //           }
  //   }
} 



