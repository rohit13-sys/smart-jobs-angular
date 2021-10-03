import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Employer } from 'src/app/pojo/employer';
import { PostedJobsServiceService } from 'src/app/service/posted-jobs-service.service';
import { Postedjob } from 'src/app/pojo/postedjob';
import { SkillsList } from 'src/app/pojo/skills-list';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {

  skillsList:any = SkillsList
  dropdownSettings : IDropdownSettings={}

  employeeEmail: string | null = ''

  postJobForm : FormGroup = new FormGroup({})
  
  employer:Employer = new Employer()

  postJob:Postedjob = new Postedjob()
  EMessage:string = ''

  constructor( private formBuilder: FormBuilder ,private pJobService:PostedJobsServiceService,private router:Router) { }

  ngOnInit(): void {
    this.employeeEmail = sessionStorage.getItem('email')
    if(this.employeeEmail!=null){
      this.dropdownSettings = {
        idField:'id',
        textField: 'skillName',
        allowSearchFilter: true
      };
      this.createPostJobForm()
    }
    else{
      this.EMessage = "You Are Logged Out Kindly Login!!!"
    }
  }

  createPostJobForm(){
    this.postJobForm = this.formBuilder.group({
      //login:[],
      employee:this.formBuilder.group({
        login:this.formBuilder.group({
          userId:[this.employeeEmail,{value:this.employeeEmail,disabled:true}]
        })
      }),
      jobType:['',Validators.required],
      jobRole:['',Validators.required],
      skills:['',Validators.required],
      vacancies:['',[Validators.required
                    ,Validators.min(0)]],
      salary:['',[Validators.required
                    ,Validators.min(0)]],
      experience:['',Validators.required],
      officeAddress:['',Validators.required],
      postedDate:[''],
      isActive:['']
    })
  }
  get postJobs(){
    return this.postJobForm?.controls
  }

  // get employers(){
  //   return this.postJobs.get('employee').controls
  // }
  save(data:any){
    console.log(this.postJobForm);
    //this.postJob.employee.login =  this.postJobs.login.value//control.get('empEmail')
    // this.postJob.jobRole = this.postJobs.jobRole.value
    // this.postJob.jobType = this.postJobs.jobType.value
    // this.postJob.experience = this.postJobs.experience.value
    // this.postJob.officeAddress = this.postJobs.officeAddress.value
    // this.postJob.skills = this.postJobs.skills.value
    // this.postJob.vacancies = this.postJobs.vacancies.value
    // this.postJob.salary = this.postJobs.salary.value
    // this.postJob.postedDate = this.postJobs.postedDate.value
    console.log(this.postJobs); 
    this.pJobService.addJob(data)
          .subscribe((data) => {
            console.log(data)
            alert("Successfully Submitted");
            this.router.navigate(['recruiterDashboard/myJobs'])
            },
            (error)=>{
              this.EMessage = "something bad happend."
            })  
  }

}