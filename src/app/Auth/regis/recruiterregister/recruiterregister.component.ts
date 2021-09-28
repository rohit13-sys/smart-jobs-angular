import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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

  constructor(private route:ActivatedRoute,private router:Router,private service:RecruiterServiceService,http:HttpClient,private fb:FormBuilder){ }
  
  registrationSuccess:any;
  regisFail:any;
  registerForm = this.fb.group({})
  // recruiter=new Recruiter();
  // login=new Login();
  // company=new Company();
  createRegisterForm(){
    this.registerForm=this.fb.group({
      login:this.fb.group({
        userId:['',Validators.required],
        pwd:['',[Validators.required]],//Validators.pattern('/^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/')
        //,Validators.minLength(8),Validators.maxLength(10)]],
        role:['',Validators.required]
      }),
      employerName:['',Validators.required],//[Validators.required,Validators.pattern(' /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/')]],
      company:this.fb.group({
        companyName:['',Validators.required],
        establishmentDate:['',Validators.required],
        companyWebsite:['',Validators.required],
      }),
      empPhoneNo:['',Validators.required],
      bid:['',Validators.required],

    });
  }
  ngOnInit() {
    this.createRegisterForm()
  }

  get signUp(){
    return this.registerForm?.controls;
  }

  register_recruiter(data:any)
  {
    console.log("sg"+this.signUp);
    console.log("FM"+this.registerForm);
    
    // this.login.userId=this.signUp.email.value
    // this.login.pwd=this.signUp.pwd.value
    // this.login.role=this.signUp.about.value

    // this.company.companyName=this.signUp.comName.value
    // this.company.establishmentDate=this.signUp.estDate.value
    // this.company.companyWebsite=this.signUp.about.value;

    // this.recruiter.employerName=this.signUp.empName.value;
    // this.recruiter.phoneNo=this.signUp.phNo.value;
    // this.recruiter.branchOfficeId=this.signUp.bid.value;
    
    // this.recruiter.login=this.login;
    // this.recruiter.company=this.company;
    console.log(data);
    
    this.service.registerRecruiter(data).subscribe(
      (success)=>{
        this.registrationSuccess=success;
        alert(`Registered Successfully!!!`)
        this.router.navigate(['login/rec_login']);
      }
      ,(error)=>{
        this.regisFail='Error try again!!!'
        //this.router.navigate(['reg_register'],{relativeTo:this.route})
      }
    )
  }



}
