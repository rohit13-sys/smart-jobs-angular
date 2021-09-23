import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seeker-profile',
  templateUrl: './seeker-profile.component.html',
  styleUrls: ['./seeker-profile.component.css']
})
export class SeekerProfileComponent implements OnInit {

  profileinfo:any;
  profilepic:any;
  picexists:boolean=false;
  successmsg:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getProfile(){

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

  upload(){
    const formData=new FormData();
    formData.append('profileImage',this.profilepic);
    
  }

}
