import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/pojo/company';
import {Employer} from '../../pojo/employer';
import { Login } from 'src/app/pojo/login';
import { Recruiter } from 'src/app/pojo/recruiter';
import { EmployerServiceService } from 'src/app/service/employer-service.service';
import { RecruiterServiceService } from 'src/app/service/recruiter-service.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  profile:Employer=new Employer();
  constructor(private router:Router,private fb:FormBuilder,private service:RecruiterServiceService) { }

  recruiterProfileForm=this.fb.group({
    comName:[''],
    empName:[''],
    email:[''],
    about:[''],
    estDate:['']
  })




  ngOnInit(): void {
    this.service.getRecruiter('rk@gmail.com').subscribe(
      (data)=>{this.profile=data;console.log('>>>>>>>>>>>>>>>>'+JSON.stringify(this.profile))},
      (error)=>{console.log('some error occurred')}
    )

    // this.profile.employerName=this.profileForm.empName.value;
    // this.profileForm.empName.setValue('hryyy');
    // this.login.userId=this.profileForm.email.value;
    // this.company.companyName=this.profileForm.comName.value;
    // this.company.establishmentDate=this.profileForm.estDate.value;
    // this.company.companyWebsite=this.profileForm.about.value;
    // this.profile.login=this.login;
    // this.profile.company=this.company

  }

  get profileForm(){
    return this.recruiterProfileForm.controls;
  }

  update(){
    console.log(this.profile)
    this.service.updateProfile(this.profile).subscribe(
      (HttpResponse)=>console.log('success'),
      (HttpErrorResponse)=>console.error('error')
    )
    this.router.navigate(['rprofile'])
  }

}
