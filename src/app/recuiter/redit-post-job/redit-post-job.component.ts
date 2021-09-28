import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Employer } from '../employer';
import { PostedJobsServiceService } from '../posted-jobs-service.service';
import { Postedjob } from '../rdashboard/postedjob';
import { SkillsList } from '../skills-list';

@Component({
  selector: 'app-redit-post-job',
  templateUrl: './redit-post-job.component.html',
  styleUrls: ['./redit-post-job.component.css']
})
export class REditPostJobComponent implements OnInit {

  id:any
  skillsList:any = SkillsList
  dropdownSettings : IDropdownSettings={}

  postJobForm : FormGroup = new FormGroup({})
  
  employer:Employer = new Employer()

  postJob:Postedjob = new Postedjob()
  EMessage:string = ''
  SMessage:string=''
  
  constructor(private formBuilder: FormBuilder ,private route:ActivatedRoute,private postJobSerivce:PostedJobsServiceService,private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('jobPostId')
    console.log(this.id);
    
    this.postJobSerivce.getJobById(this.id)
    .subscribe((data)=>{
  console.log(this.postJob);
      this.postJob = <Postedjob>data
      console.log(this.postJob);
      
    },(error)=>{
      console.error(error);
    })
    this.dropdownSettings = {
      idField:'id',
      textField: 'skillName',
      allowSearchFilter: true
    };
    this.createPostJobForm()

  }
  get postJobs(){
    return this.postJobForm?.controls
  }

  createPostJobForm(){
    this.postJobForm = this.formBuilder.group({
      //login:[],
      // employee:this.formBuilder.group({
      //   login:this.formBuilder.group({
      //     userId:['']
      //   })
      // }),
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
  edit(){
    console.log(this.postJob);
    this.postJobSerivce.updateJob(this.postJob)
    .subscribe((success)=>{
      console.log(success);
      //alert(success)
    },(error)=>{
      console.log(error);
      this.EMessage = error
    })
    this.router.navigate(['../../myJobs'],{relativeTo:this.route})
  }
}
