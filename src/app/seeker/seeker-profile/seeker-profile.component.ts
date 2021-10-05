import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {  EmployeePersonal, JsEduId, JsExpId } from 'src/app/pojo/employee';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-seeker-profile',
  templateUrl: './seeker-profile.component.html',
  styleUrls: ['./seeker-profile.component.css']
})
export class SeekerProfileComponent implements OnInit {
  profileinfo:any;
  profilepic: any;
  picexists: boolean = false;
  successmsg: any;
  emailId: string | null = '';
  eMessage:string=''
  covertedImage:any
  // profilePersonal: EmployeePersonal = new EmployeePersonal();
  profilePersonal: EmployeePersonal = new EmployeePersonal();
  profileEducation:JsEduId=new JsEduId();
  profileExp:JsExpId=new JsExpId();
  thumbnail:any
  constructor(private sanitizer: DomSanitizer,private router: Router, private service: EmployeeServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.emailId = sessionStorage.getItem('semail')
    console.log("myemail",this.emailId);
    if(this.emailId){
        this.getProfile()
        // this.service.getEmpEducationById(this.emailId).subscribe(
        //   (data)=>{this.profileEducation=data;console.log('?????????????????'+this.profileEducation)},
        //   (error)=>{console.log('some error occurred')}
        // )
    
        // this.service.getEmpExpById(this.emailId).subscribe(
        //   (data)=>{this.profileExp=data;console.log('?????????????????'+this.profileExp)},
        //   (error)=>{console.log('some error occurred')}
        // )
    }
    else{
      this.eMessage = "You are logged Out Kindly Login!!!"
    }
  }

  getProfile() {
    this.service.getEmpPersonalById(this.emailId).subscribe(
      (data) => { 
        this.profilePersonal = data;
        console.log("?????????????????",this.profilePersonal); 
        this.covertedImage = 'data:image/jpeg;base64,' + this.profilePersonal.photo;            
        this.thumbnail = this.sanitizer.bypassSecurityTrustHtml(this.covertedImage);
      }  
      ,(error) => { console.log('some error occurred')})
  }

  logout() {
    this.router.navigate(['login/emp_login'])
  }

  selectImage(event: any) {
    if (event.target.files.length > 0) {
      //const file = event.target.files[0];
      this.profilepic = event.target.files[0];
      console.log(this.profilepic);
    }
  }

  upload(id:string) {
    
    this.service.uploadImage(this.profilepic,id)
    .subscribe((data)=>{
      console.log(data)
      alert("Successfully Image Uploaded!!!")
      this.getProfile()
    }
    ,(error)=>{
      console.log(error)
      alert("Sorry Can't Upload Image!!!")
    })
  }

}
