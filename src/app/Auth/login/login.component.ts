import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private activatedroute:ActivatedRoute) { }
  //tabset:boolean=false;
  canAct = true   
  //canInAct =false
  tab1 = {
    act:this.canAct,
    // inAct:this.canInAct
  }
  tab2 = {
    act:!this.canAct,
    // inAct:!this.canInAct
  }
  ngOnInit() {
  }
  employeeloginpage()
  {
    console.log("heyyy")
    this.router.navigate(['login/emp_login']);
    console.log("byee")
    // this.canAct = this.canAct
    // this.canInAct = !this.canInAct
    this.tab1 = {
      act:this.canAct
      // inAct:this.canInAct
    }
    this.tab2 ={
      act:!this.canAct
    }
    //this.tabset=true;
    
  }
  recruiterloginpage()
  {
    this.router.navigate(['rec_login'],{relativeTo:this.activatedroute});
    //this.tabset=true;
    // this.canAct = !this.canAct
    // this.canInAct = this.canInAct
    this.tab2 = {
      act:this.canAct
      // inAct:this.canInAct
    }
    this.tab1 ={
      act:!this.canAct
    }
  }
}
