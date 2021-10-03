import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/pojo/company';
import { Employer } from 'src/app/pojo/employer';
import { Login } from 'src/app/pojo/login';
import { Recruiter } from 'src/app/pojo/recruiter';
import { EmployerServiceService } from 'src/app/service/employer-service.service';
import { RecruiterServiceService } from 'src/app/service/recruiter-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // profileForm:FormGroup=this.fb.group({
  //   email:[''],
  //   comName:[''],
  //   about:[''],
  //   estDate:['']
  // });
  profile: Employer=new Employer();
  // login=new Login();
  // company=new Company();
  profilepic:any;
  picexists:boolean=false;
  msg:any;
  emailId:string|null = ''

  constructor(private router:Router,private empService:EmployerServiceService,private service:RecruiterServiceService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.emailId = sessionStorage.getItem('email')
    if(this.emailId!=null){
      this.empService.getEmpById(this.emailId).subscribe(
        (data)=>{this.profile=data;},
        (error)=>{this.msg = "some error occurred"}
      )
    }else{
      this.msg = "You Are Logged Out Kindly Login!!!"
    }

    // this.profileForm.setValue({
    //   email:this.profile?.login.userId,
    //   comName:this.profile?.company.companyName,
    //   about:this.profile?.company.companyWebsite,
    //   estDate:this.profile?.company.establishmentDate
    // });

    
    
  }

  logout(){
    this.router.navigate(['login/emp_login'])
  }

  selectImage(event:any){
    if(event.target.files.length>0){
      const file=event.target.files[0];
      this.profilepic=file;
      console.log(this.profilepic);
    }
  }


  // get form(){
  //   return this.profileForm.controls;
  // }

  upload(){
    const formData=new FormData();
    formData.append('profileImage',this.profilepic);
    
  }

}
