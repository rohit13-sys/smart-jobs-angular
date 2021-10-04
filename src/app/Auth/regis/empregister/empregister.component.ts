import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmployerServiceService } from 'src/app/service/employer-service.service';
import { SkillsList } from 'src/app/pojo/skills-list';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { passwordIntegrityValidator } from 'src/app/directives/password-integrity.directive';

@Component({
  selector: 'app-empregister',
  templateUrl: './empregister.component.html',
  styleUrls: ['./empregister.component.css']
})
export class EmpregisterComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router:Router,private fb:FormBuilder,private service:EmployerServiceService,http:HttpClient,private activatedroute:ActivatedRoute) { }
  EmpRegisterForm!:FormGroup;
  registrationSuccess:any;
  regisFail:any;
  regisServer:any;
  skillsList:any = SkillsList
  dropdownSettings : IDropdownSettings={}


  ngOnInit() {
     this.dropdownSettings = {
        idField:'id',
        textField: 'skillName',
        allowSearchFilter: true
      };
    this.EmpRegisterForm=this.fb.group({
      login:this.fb.group({
        userId:['',Validators.required],
        pwd:['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)
                ,passwordIntegrityValidator(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/g)]],
        role:['JobSeeker',Validators.required]
      }),
      seekerName:['',Validators.required],
      seekerMobile: ['',[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]],
      skills:['',Validators.required],
      gender:['',Validators.required],
      jsEduId:this.fb.group({
        hscResult: ['',Validators.required],
        sscResult: ['',Validators.required],
        universityName: ['',Validators.required],
        startDate: ['',Validators.required],
        endDate: ['',Validators.required],
        percentage: ['',Validators.required],
        cgpa: ['',Validators.required],
      }),
      jsExpId:this.fb.group({
        companyName: [''],
        yearOfExp: [''],
        jobTitle: [''],
        description: [''],
      })
      });
  }

  get signUp(){
    return this.EmpRegisterForm?.controls;
  }
  registeremployee(data:any){
    console.log("data",data);
    
    this.service.registerEmp(data).subscribe(
          (success)=>{
            console.log(success);
            alert("SuccessFully Registered!!!")
            this.router.navigate(['../../login'],{relativeTo:this.route})
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
