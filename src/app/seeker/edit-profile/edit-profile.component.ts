import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  profileinfo: any;
  seekerProfileForm!: FormGroup;
  updated: any;
  userdata:any={};

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getProfile();
    this.seekerProfileForm = this.fb.group({
      username: [''],
      password: ['', Validators.compose([Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"), Validators.minLength(8)])],
      mail: ['', Validators.compose([Validators.email])],
      gender: [''],
      mobile: [''],
      hometown: [''],
      interests: [''],
      experience: [''],
      maritalStatus: [''],
      nationality: [''],
      languages: [''],
      currentLocation: [''],
      lastjobexp: [''],
      lastjobDesig: [''],
      department: [''],
      reasonsforleaving: ['']
    })
  }

  getProfile(){

  }

  updateProfile(){

  }

}
