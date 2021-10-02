import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Login } from 'src/app/pojo/login';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { LoginService } from 'src/app/service/login.service';
@Component({
  selector: 'app-recruiterlogin',
  templateUrl: './recruiterlogin.component.html',
  styleUrls: ['./recruiterlogin.component.css']
})
export class RecruiterloginComponent implements OnInit {
  loginsuccess:boolean=false;
  loginfail:boolean=false;
  eMessage:string = ''
  login = new Login();
  loginForm!: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private service: LoginService, private http: HttpClient) { }



  ngOnInit() {
    this.createFormGroup()
  }

  createFormGroup(){
    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      password: [null,Validators.compose([Validators.required,Validators.minLength(5)])]
    });
  }

  moveToRegister() {
    this.router.navigate(['register/rec_register']);
  }

  // login() {
  //   this.router.navigate(['recruiterDashboard/myJobs']);
  // }

  get form() {
    return this.loginForm?.controls;
  }


  loginUser() {
    this.login.userId=this.form.email.value;
    this.login.pwd=this.form.password.value;
    this.login.role = 'Employer'
    this.service.loginRecruiterFromRemote(this.login).subscribe(
      (response) => {
          this.loginsuccess=true

          sessionStorage.setItem('email',this.login.userId)
          //this.sMessage = response
          //console.log("getEmail:" + this.service.getEmail());
          
          this.router.navigate(['recruiterDashboard/myJobs'])
      },(error)=> {
        console.log(error);
        
          if(error.status == 401)
            this.eMessage = "Incorrect Username or Password!!!"
          else if(error.status == 409)
            this.eMessage = "Sorry Email does not exists Kindly Register!!!"
          else
            this.eMessage = "Something Bad Happened Please Try Again later!!!"
        })
      
      }
}
