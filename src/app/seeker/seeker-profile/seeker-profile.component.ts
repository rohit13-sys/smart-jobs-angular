import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeEducation, EmployeeExp, EmployeePersonal } from 'src/app/pojo/employee';
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
  profilePersonal: EmployeePersonal = new EmployeePersonal();
  profileEducation:EmployeeEducation=new EmployeeEducation();
  profileExp:EmployeeExp=new EmployeeExp();
  constructor(private router: Router, private service: EmployeeServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.emailId = 'xyz@gmail.com'
    this.service.getEmpPersonalById(this.emailId).subscribe(
      (data) => { this.profilePersonal = data;console.log("?????????????????"+this.profilePersonal); },
      (error) => { console.log('some error occurred') }
    )

    this.service.getEmpEducationById(this.emailId).subscribe(
      (data)=>{this.profileEducation=data;console.log('?????????????????'+this.profileEducation)},
      (error)=>{console.log('some error occurred')}
    )

    this.service.getEmpExpById(this.emailId).subscribe(
      (data)=>{this.profileExp=data;console.log('?????????????????'+this.profileExp)},
      (error)=>{console.log('some error occurred')}
    )

  }

  getProfile() {

  }

  logout() {
    this.router.navigate(['login/emp_login'])
  }

  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.profilepic = file;
      console.log(this.profilepic);
    }
  }

  upload() {
    const formData = new FormData();
    formData.append('profileImage', this.profilepic);

  }

}
