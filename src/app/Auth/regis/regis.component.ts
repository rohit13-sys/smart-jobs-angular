import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css']
})
export class RegisComponent implements OnInit {

  constructor(private router:Router,private activatedroute:ActivatedRoute) { }

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
  employeeregisterpage()
  {
    this.router.navigate(['emp_register'],{relativeTo:this.activatedroute});
    this.tab1 = {
      act:this.canAct
      // inAct:this.canInAct
    }
    this.tab2 ={
      act:!this.canAct
    }
  }
  recruiterregisterpage()
  {
    this.router.navigate(['rec_register'],{relativeTo:this.activatedroute});
    this.tab2 = {
      act:this.canAct
      // inAct:this.canInAct
    }
    this.tab1 ={
      act:!this.canAct
    }
  }
}
