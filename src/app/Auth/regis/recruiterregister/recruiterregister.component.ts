import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import { Recruiter } from 'src/app/pojo/recruiter';
import { RecruiterServiceService } from 'src/app/service/recruiter-service.service';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Login } from 'src/app/pojo/login';
import { Company } from 'src/app/pojo/company';

@Component({
  selector: 'app-recruiterregister',
  templateUrl: './recruiterregister.component.html',
  styleUrls: ['./recruiterregister.component.css']
})
export class RecruiterregisterComponent implements OnInit {

  constructor(private router:Router,private service:RecruiterServiceService,http:HttpClient,private fb:FormBuilder){ }
  
  registrationSuccess:any;
  regisFail:any;
  recruiter=new Recruiter();
  login=new Login();
  company=new Company();
  registerForm=this.fb.group({
    empName:['',Validators.required],
    email:['',[Validators.required,Validators.pattern(' /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/')]],
    pwd:['',[Validators.required,Validators.pattern('/^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/')
                ,Validators.minLength(8),Validators.maxLength(10)]],
    role:[''],
    comName:['',Validators.required],
    estDate:['',Validators.required],
    about:['',Validators.required],
    phNo:['',Validators.required],
    bid:['',Validators.required],

  });

  ngOnInit() {
    
  }

  get signUp(){
    return this.registerForm?.controls;
  }

  register_recruiter()
  {

    this.login.userId=this.signUp.email.value
    this.login.pwd=this.signUp.pwd.value
    this.login.role=this.signUp.about.value

    this.company.companyName=this.signUp.comName.value
    this.company.establishmentDate=this.signUp.estDate.value
    this.company.companyWebsite=this.signUp.about.value;

    this.recruiter.employerName=this.signUp.empName.value;
    this.recruiter.phoneNo=this.signUp.phNo.value;
    this.recruiter.branchOfficeId=this.signUp.bid.value;
    
    this.recruiter.login=this.login;
    this.recruiter.company=this.company;

    this.service.registerRecruiter(this.recruiter).subscribe(
      (success)=>{
        this.registrationSuccess="Registration successful";
        this.router.navigate(['login/rec_login']);
      }
      ,(error)=>{
        this.regisFail='Error try again!!!'
        this.router.navigate(['register/reg_register'])
      }
    )
  }



}
