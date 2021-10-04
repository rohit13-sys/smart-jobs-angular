import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmployerServiceService } from 'src/app/service/employer-service.service';
// import { Jobseeker } from 'src/app/pojo/jobseeker';
import { SkillsList } from 'src/app/pojo/skills-list';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { passwordIntegrityValidator } from 'src/app/directives/password-integrity.directive';
// import { Jobedu } from 'src/app/pojo/jobedu';
// import { Jobexe } from 'src/app/pojo/jobexe';

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
  // jobseeker:Jobseeker= new Jobseeker();
  skillsList:any = SkillsList
  dropdownSettings : IDropdownSettings={}
  // jobedu:Jobedu= new Jobedu()
  // jobexe:Jobexe= new Jobexe()

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

      // userName: ['',Validators.required],
      // password: ['',Validators.compose([Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"),Validators.minLength(8)])],
      // mail:['',Validators.compose([Validators.required,Validators.email])],
      // gender: ['',Validators.required],
      seekerMobile: ['',[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]],
      skills:['',Validators.required],
      gender:['',Validators.required],
      jsEduId:this.fb.group({
        hscResult: [''],
        sscResult: [''],
        universityName: [''],
        startDate: [''],
        endDate: [''],
        percentage: [''],
        cgpa: [''],
      }),
      jsExpId:this.fb.group({
        companyName: [''],
        yearOfExp: [''],
        jobTitle: [''],
        description: [''],
      })
      // hometown: [''],
      // interests: ['',Validators.max(3)],
      // experience: [''],
      // nationality: [''],
      // languages: ['',Validators.required],
      // currentLocation: ['',Validators.required],
      // hscResult: [''],
      // sscResult: [''],
      // universityName: [''],
      // startDate: [''],
      // endDate: [''],
      // percentage: [''],
      // cgpa: [''],
      // companyName: [''],
      // yearOfExp: [''],
      // jobTitle: [''],
      // description: [''],
      // lastjobexp: ['',Validators.required],
      // lastjobDesig: ['',Validators.required],
      // department: [''],
      // reasonsforleaving: ['']
      });
  }

  get signUp(){
    return this.EmpRegisterForm?.controls;
  }
  registeremployee(data:any){
    console.log("data",data);
    
    this.service.registerEmp(data).subscribe(
          (success)=>{
            //this.registrationSuccess=success;
            console.log(success);
            alert("SuccessFully Registered!!!")
            this.router.navigate(['login'],{relativeTo:this.route})
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
  // registeremployee(data:any)
  // {
  //     // console.log(data)
  //     // this.jobseeker.seekerName=data.value.userName
  //     // this.jobseeker.login.pwd=data.value.password
  //     // this.jobseeker.login.userId=data.value.mail
  //     // // this.jobseeker.gender=data.value.gender
  //     // this.jobseeker.seekerMobile=data.value.mobile
  //     // // this.jobseeker.experiance=data.value.experience
  //     // // this.jobseeker.address=data.value.currentLocation
  //     // // this.jobseeker.languages=data.value.languages
  //     // this.jobseeker.skills=data.value.skills
  //     // console.log(this.jobseeker.skills)

  //     // this.jobedu.login.userId=data.value.mail
  //     // this.jobedu.universityName=data.value.universityName
  //     // this.jobedu.cgpa=data.value.cgpa
  //     // this.jobedu.endDate=data.value.endDate
  //     // this.jobedu.startDate=data.value.startDate
  //     // this.jobedu.hscResult=data.value.hscResult
  //     // this.jobedu.sscResult=data.value.sscResult

  //     // this.jobexe.companyName=data.value.companyName
  //     // this.jobexe.description=data.value.description
  //     // this.jobexe.jobTitle=data.value.jobTitle
  //     // this.jobexe.yearOfExp=data.value.yearOfExp
  //     // this.jobexe.login.userId=data.value.mail

  //   //  console.log(this.jobedu)
  //   //  console.log(this.jobexe)

  // this.service.registerSeeker(this.jobseeker).subscribe(
  //     (success)=>{
  //       //this.registrationSuccess=success;
  //       console.log(success);
  //     }
  //     ,(error)=>{
  //       console.log("res: " + error.status);
        
  //       if(error.status == 409){
  //         this.regisFail = "User Already exist please go through login..."
  //         document.body.scrollTop = document.documentElement.scrollTop = 0;
  //       }
  //       else{this.regisFail='Error try again!!'
  //       document.body.scrollTop = document.documentElement.scrollTop = 0;
  //       }
  //     }
  //   )

    
  // this.service.registerSeekerEdu(this.jobedu).subscribe(
  //   (success)=>{
  //     //this.registrationSuccess=success;
  //     console.log(success);
  //   }
  //   ,(error)=>{
  //     console.log("res: " + error.status);
      
  //     if(error.status == 409){
  //       this.regisFail = "User Already exist please go through login..."
  //       document.body.scrollTop = document.documentElement.scrollTop = 0;
  //     }
  //     else{this.regisFail='Error try again!!'
  //     document.body.scrollTop = document.documentElement.scrollTop = 0;
  //     }
  //   }
  // )
  
  // this.service.registerSeekerExe(this.jobexe).subscribe(
  //   (success)=>{
  //     //this.registrationSuccess=success;
  //     console.log(success);
  //     alert('Registered Successfully!!!')
  //     this.router.navigate(['login/emp_login'],{relativeTo:this.activatedroute});
  //   }
  //   ,(error)=>{
  //     console.log("res: " + error.status);
      
  //     if(error.status == 409){
  //       this.regisFail = "User Already exist please go through login..."
  //       document.body.scrollTop = document.documentElement.scrollTop = 0;
  //     }
  //     else{this.regisFail='Error try again!!'
  //     document.body.scrollTop = document.documentElement.scrollTop = 0;
  //     }
  //   }
  // )
  // }
}
