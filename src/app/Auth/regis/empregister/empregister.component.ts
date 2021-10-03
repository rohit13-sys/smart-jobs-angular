import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmployerServiceService } from 'src/app/service/employer-service.service';

@Component({
  selector: 'app-empregister',
  templateUrl: './empregister.component.html',
  styleUrls: ['./empregister.component.css']
})
export class EmpregisterComponent implements OnInit {

  constructor(private router:Router,private fb:FormBuilder,private service:EmployerServiceService,http:HttpClient) { }
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
  registeremployee(data:any)
  {
  
    this.service.registerSeeker(data).subscribe(
      (response)=>{
        //this.registrationSuccess=success;
        console.log(response);
        alert(`Registered Successfully!!!`)
        this.router.navigate(['login/rec_login']);
      }
      ,(response)=>{
        console.log("res: " + response.status);
        
        if(response.status == 409){
          this.regisFail = "User Already exist please go through login..."
        }
        else{this.regisFail='Error try again!!!'
        }//this.router.navigate(['reg_register'],{relativeTo:this.route})
      }
    )
  }

}
