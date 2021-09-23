import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent implements OnInit {

  isSearchEmpty: boolean = true;

  input1: string = "";
  input2: string = "";
  constructor() { }

  ngOnInit(): void {
    
  }
  change() {
    if (this.input1.length == 0) {
      this.isSearchEmpty = true;
    }
    else if(this.input1.length!=0) {
      this.isSearchEmpty = false;
    }
  }
}



