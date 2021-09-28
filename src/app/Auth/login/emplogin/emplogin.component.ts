import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Login } from 'src/app/pojo/login';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent implements OnInit {
  loginSuccess: any;
  loginFail: any;
  constructor(private router: Router,private fb:FormBuilder) { }
  loginForm: FormGroup = this.fb.group({
    email: [null,Validators.required],
    password: [null,Validators.compose([Validators.required,Validators.minLength(5)])]
  });
  ngOnInit() {
  }
  moveToRegister() {
    this.router.navigate(['register/emp_register']);
  }
  login() {
    this.router.navigate(['search']);
  }
  get form(){
    return this.loginForm.controls;
  }
  // clearForm(){
  //   (<HTMLFormElement>document.getElementById("loginform")).reset();
  //  }

}





