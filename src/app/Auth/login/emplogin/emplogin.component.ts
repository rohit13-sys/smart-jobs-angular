import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent implements OnInit {
  loginSuccess: any;
  loginFail: any;
  loginform!:FormGroup;
  constructor(private router: Router, private fb:FormBuilder) { }
  loginForm= this.fb.group({
    userName: [null,Validators.required],
    password: [null,Validators.compose([Validators.required,Validators.minLength(5)])]
  });
  ngOnInit() {
  }
  moveToRegister() {
    this.router.navigate(['register/emp_register']);
  }
  login() {
    this.router.navigate(['search'])
  }
  get form(){
    return this.loginForm.controls;
  }



}
