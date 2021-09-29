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
  sMessage:string = ''
  login = new Login();
  loginForm: FormGroup = this.fb.group({
    email: [null,Validators.required],
    password: [null,Validators.compose([Validators.required,Validators.minLength(5)])]
  });
  constructor(private router: Router, private fb: FormBuilder, private service: LoginService, private http: HttpClient) { }



  ngOnInit() {
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
    this.service.loginRecruiterFromRemote(this.login).subscribe(
      (response) => {
          this.loginsuccess=true
          //this.sMessage = response
          this.router.navigate(['recruiterDashboard/myJobs'])
      },(error)=> {
          if(error.status == 401)
            this.loginfail=true
          this.router.navigate(['login/rec_login'])
        })


   
    



  }
}
