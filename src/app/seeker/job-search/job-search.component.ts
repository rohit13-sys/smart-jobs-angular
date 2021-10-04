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
  errorMessage: string=''
  eMessage:string= ''
  jobs : Job[]=[];
  isSearchEmpty: boolean = true;
  input1: string = "";
  input2: string = "";
  constructor(private joblist:SearchJobService,private logins:LoginService,private jobst:SearchJobService,private pjobs:PostedjobsComponent) {}
  
  ngOnInit(): void {
  }

  search(searchForm: NgForm){
    this.pjobs.jobs = this.pjobs.jobs1
    console.log(this.pjobs.jobs1);
    
    this.value1=searchForm.value.input1;
    var array = this.value1.split(" ")
    // console.log(array)  
    // console.log(this.value1)
    if(this.value1 != ""){
      for(this.arrayvalue of array){
    //  this.jobs = this.jobs.filter(res=>{
      this.pjobs.jobs=this.pjobs.jobs.filter(res=>{
        if(this.arrayvalue.toLowerCase().match(res.employee.company.companyName.toLowerCase())){
          // console.log("company")
          return res.employee.company.companyName.toLowerCase().match(this.arrayvalue.toLowerCase());}
        else if(res.jobRole.toLowerCase().match(this.arrayvalue.toLowerCase())){
          //  console.log("jobrole")
           return res.jobRole.toLowerCase().match(this.arrayvalue.toLowerCase());
         } 
        else{
              // console.log("skill")
              // console.log(res)
              var string:string ='';
                for(let s of res.skills){
                  // console.log(s.skillName);
                  string=s.skillName+string;
                }
                // console.log(string.toLowerCase())
                // console.log(this.arrayvalue.toLowerCase())
                // if(string.toLowerCase().match(this.arrayvalue.toLowerCase())){
                //     console.log("yes")}
            return string.toLowerCase().match(this.arrayvalue.toLowerCase());
          }
          })
      }      
     }
    else if(this.value1 == ""){
      this.pjobs.jobs = this.pjobs.jobs1
    }
  }
} 



