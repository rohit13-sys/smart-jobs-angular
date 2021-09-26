import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Employer } from 'src/app/pojo/employer';
import { Postedjob } from 'src/app/pojo/postedjob';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {

  skillsList:any = []
  dropdownSettings : IDropdownSettings={}

  postJobForm : FormGroup = new FormGroup({})
  
  employer:Employer|undefined

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.skillsList = [
      { skillId: 1, skillName:'HTML' },
      { skillId: 2, skillName:'CSS' },
      { skillId: 3, skillName:'JAVASCRIPT' },
      { skillId: 4, skillName:'ANGULAR TS' },
      { skillId: 5  , skillName:'REACT JS' },
    ]
    this.dropdownSettings = {
      idField: 'skillId',
      textField: 'skillName',
      allowSearchFilter: true
    };
    this.createPostJobForm()
  }

  createPostJobForm(){
    this.postJobForm = this.formBuilder.group({
      empEmail:[],
      jobType:['',Validators.required],
      jobRole:['',Validators.required],
      skills:['',Validators.required],
      vacancies:['',[Validators.required
                    ,Validators.min(0)]],
      salary:['',[Validators.required
                    ,Validators.min(0)]],
      experience:['',Validators.required]
    })
  }
  get postJobs(){
    return this.postJobForm?.controls
  }

  save(){
    alert('Form is successfully submitted!!!')
    console.log(this.postJobForm);
    
  }
}
