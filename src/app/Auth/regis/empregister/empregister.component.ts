import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmployerServiceService } from 'src/app/service/employer-service.service';
import { Jobseeker } from 'src/app/pojo/jobseeker';
import { SkillsList } from 'src/app/pojo/skills-list';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-empregister',
  templateUrl: './empregister.component.html',
  styleUrls: ['./empregister.component.css']
})
export class EmpregisterComponent implements OnInit {

  constructor(private router:Router,private fb:FormBuilder,private service:EmployerServiceService,http:HttpClient,private activatedroute:ActivatedRoute) { }
  EmpRegisterForm!:FormGroup;
  registrationSuccess:any;
  regisFail:any;
  regisServer:any;
  jobseeker:Jobseeker= new Jobseeker();
  skillsList:any = SkillsList
  dropdownSettings : IDropdownSettings={}

  

  ngOnInit() {
     this.dropdownSettings = {
        idField:'id',
        textField: 'skillName',
        allowSearchFilter: true
      };
    this.EmpRegisterForm=this.fb.group({
      userName: ['',Validators.required],
      password: ['',Validators.compose([Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"),Validators.minLength(8)])],
      mail:['',Validators.compose([Validators.required,Validators.email])],
      gender: ['',Validators.required],
      mobile: ['',[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]],
      skills:['',Validators.required],
      // hometown: [''],
      // interests: ['',Validators.max(3)],
      experience: [''],
      // nationality: [''],
      languages: ['',Validators.required],
      currentLocation: ['',Validators.required],
      // lastjobexp: ['',Validators.required],
      // lastjobDesig: ['',Validators.required],
      // department: [''],
      // reasonsforleaving: ['']
      });
  }

  get signUp(){
    return this.EmpRegisterForm?.controls;
  }

  registeremployee(data:any)
  {
      console.log(data)
      this.jobseeker.seekerName=data.value.userName
      this.jobseeker.login.pwd=data.value.password
      this.jobseeker.login.userId=data.value.mail
      this.jobseeker.gender=data.value.gender
      this.jobseeker.seekerMobile=data.value.mobile
      this.jobseeker.experiance=data.value.experience
      this.jobseeker.address=data.value.currentLocation
      this.jobseeker.languages=data.value.languages
      this.jobseeker.skills=data.value.skills
      console.log(this.jobseeker.skills)

  this.service.registerSeeker(this.jobseeker).subscribe(
      (success)=>{
        //this.registrationSuccess=success;
        console.log(success);
        alert('Registered Successfully!!!')
        this.router.navigate(['login/emp_login'],{relativeTo:this.activatedroute});
      }
      ,(error)=>{
        console.log("res: " + error.status);
        
        if(error.status == 409){
          this.regisFail = "User Already exist please go through login..."
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
        else{this.regisFail='Error try again!!'
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
      }
    )
  }
}
