import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-empregister',
  templateUrl: './empregister.component.html',
  styleUrls: ['./empregister.component.css']
})
export class EmpregisterComponent implements OnInit {

  constructor(private router:Router,private fb:FormBuilder) { }
  EmpRegisterForm!:FormGroup;
  registrationSuccess:any;
  regisFail:any;
  regisServer:any;
  ngOnInit() {
    this.EmpRegisterForm=this.fb.group({
      userName: ['',Validators.required],
      password: ['',Validators.compose([Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"),Validators.minLength(8)])],
      mail:['',Validators.compose([Validators.required,Validators.email])],
      gender: ['',Validators.required],
      mobile: ['',Validators.required],
      hometown: [''],
      interests: ['',Validators.max(3)],
      experience: [''],
      nationality: [''],
      languages: [''],
      currentLocation: [''],
      lastjobexp: ['',Validators.required],
      lastjobDesig: ['',Validators.required],
      department: [''],
      reasonsforleaving: ['']
      });
  }
  registeremployee()
  {
  
  }

}
