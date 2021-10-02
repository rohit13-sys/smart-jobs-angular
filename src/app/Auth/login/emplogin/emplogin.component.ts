import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Login } from 'src/app/pojo/login';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent implements OnInit {
  loginSuccess: any;
  loginFail: any;
  username:string='';
  password:any;
  eMessage:string = ''
  login = new Login();
  constructor(private router: Router,private fb:FormBuilder,private logins:LoginService) { }

  loginForm: FormGroup = this.fb.group({
    email: [null,Validators.required],
    password: [null,Validators.compose([Validators.required,Validators.minLength(5)])]
  });

  ngOnInit() {
  }
  moveToRegister() {
    this.router.navigate(['register/emp_register']);
  }

  createFormGroup(){
    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      password: [null,Validators.compose([Validators.required,Validators.minLength(5)])]
    });
  }
  // login() {
  //   this.logins.username=this.username
  //   this.router.navigate(['search']);
  // }
  get form(){
    return this.loginForm.controls;
  }
  // clearForm(){
  //   (<HTMLFormElement>document.getElementById("loginform")).reset();
  //  }

  loginUser() {
    this.login.userId=this.form.email.value;
    this.login.pwd=this.form.password.value;
    this.login.role = 'JobSeeker'
    this.logins.loginJobSeekerFromRemote(this.login).subscribe(
      (response) => {
          this.loginSuccess=true

          sessionStorage.setItem('email',this.login.userId)
          //this.sMessage = response
          //console.log("getEmail:" + this.service.getEmail());
          
          this.router.navigate(['search']);
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





