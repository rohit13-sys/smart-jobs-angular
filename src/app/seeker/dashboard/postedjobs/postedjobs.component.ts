import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-postedjobs',
  templateUrl: './postedjobs.component.html',
  styleUrls: ['./postedjobs.component.css']
})
export class PostedjobsComponent implements OnInit {

  jobs = [
    {
      companyName: "STL",
      jobRole: "Front-end Developer",
      skills: "Html,css,javacript,React-js",
      jobType: "Permanent",
      salary: 15000.00,
      isActive: "Active",
      exp: "0-1 Years"
    },
    {
      companyName: "Docomo",
      jobRole: "Back-end Developer",
      skills: "Java,Spring,hibernate",
      jobType: "Internship",
      salary: 5000.00,
      isActive: "NotActive",
      exp: "1-2 Years"
    },
    {
      companyName: "Sparks",
      jobRole: "Full Stack Developer",
      skills: "Html,css,javacript,React-js,Java,Database",
      jobType: "Permanent",
      salary: 25000.00,
      isActive: "NotActive",
      exp: "3-4 Years"
    },
    {
      companyName: "Sparks",
      jobRole: "Angular Developer",
      skills: "Html,css,javacript,Typescript",
      jobType: "Permanent",
      salary: 25000.00,
      isActive: "NotActive",
      exp: "0-1 Years"
    },
    {
      companyName: "SpceX",
      jobRole: "Management",
      skills: "Communication skills,English,French",
      jobType: "Permanent",
      salary: 35000.00,
      isActive: "Active",
      exp: "2-5 Months"
    },
    {
      companyName: "Tesla",
      jobRole: "Front-end Developer",
      skills: "Html,css,javacript,React-js",
      jobType: "Contract",
      salary: 25000.00,
      isActive: "NotActive",
      exp: "1-4 Years"
    },
    {
      companyName: "master",
      jobRole: "HR Management",
      skills: "Communication skills,English,Leadrship skills,Creativity",
      jobType: "Permanent",
      salary: 55000.00,
      isActive: "Active",
      exp: "2-5 Years"
    }
  ]

  message:string="heyy";
  isSearchEmpty:boolean=true;

  change():any{
    this.isSearchEmpty=false;
    console.log(this.message);
  }
  


  constructor() { }

  ngOnInit(): void {
  }

  
}
