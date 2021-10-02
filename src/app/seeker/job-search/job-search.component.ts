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
    // this.jobs = [ {
    //   id:101,
    //   companyName: "STL",
    //   jobRole: "Front-end Developer",
    //   skills: [{skillId:101,skillName:"Html"},{skillId:102,skillName:"css"},{skillId:103,skillName:"javacript"}],
    //   jobType: "Permanent",
    //   salary: 15000.00,
    //   isActive: "Active",
    //   experience: "0-1 Years"
    // },
    // {
    //   id:102,
    //   companyName: "Docomo",
    //   jobRole: "Back-end Developer",
    //    skills: [{skillId:101,skillName:"Java"},{skillId:102,skillName:"Spring"},{skillId:103,skillName:"hibernate"}],
    //   jobType: "Internship",
    //   salary: 5000.00,
    //   isActive: "NotActive",
    //   experience: "1-2 Years"
    // },
    // {
    //   id:103,
    //   companyName: "Sparks",
    //   jobRole: "Full Stack Developer",
    //   skills: [{skillId:101,skillName:"Html"},{skillId:102,skillName:"css"},{skillId:103,skillName:"javacript"}],
    //   jobType: "Permanent",
    //   salary: 25000.00,
    //   isActive: "NotActive",
    //   experience: "3-4 Years"
    // },
    // {  id:104,
    //   companyName: "Sparks",
    //   jobRole: "Angular Developer",
    //   skills: [{skillId:101,skillName:"TypeScript"}],
    //   jobType: "Permanent",
    //   salary: 25000.00,
    //   isActive: "NotActive",
    //   experience: "0-1 Years"
    // },
    // {
    //     id:105,
    //   companyName: "SpceX",
    //   jobRole: "Management",
    //   skills: "Communication skills,English,French",
    //   jobType: "Permanent",
    //   salary: 35000.00,
    //   isActive: "Active",
    //   exp: "2-5 Months"
    // },
    // {
    //     id:106,
    //   companyName: "Tesla",
    //   jobRole: "Front-end Developer",
    //   skills: "Html,css,javacript,React-js",
    //   jobType: "Contract",
    //   salary: 25000.00,
    //   isActive: "NotActive",
    //   exp: "1-4 Years"
    // },
    // {
    //     id:107,
    //   companyName: "master",
    //   jobRole: "HR Management",
    //   skills: "Communication skills,English,Leadrship skills,Creativity",
    //   jobType: "Permanent",
    //   salary: 55000.00,
    //   isActive: "Active",
    //   exp: "2-5 Years"
    // }
  //];
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
    console.log(data);
      this.appliedJobStatus.jspersonal.login.userId=this.logins.username
      this.appliedJobStatus.jobPost.jobPostId=data
      this.appliedJobStatus.appliedDate=new Date()
      this.appliedJobStatus.jobStatus="Applied"

      this.joblist.addAppliedJob(this.appliedJobStatus)
          .subscribe((success) => {
            console.log(success);
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
              console.error(error)
              // this.ApplyFail=true;
              // document.body.scrollTop = document.documentElement.scrollTop = 0;
            })
  }
} 



