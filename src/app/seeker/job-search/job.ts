import { Employer } from "src/app/pojo/employer"

export class Job {
    jobPostId:any=0
    employee:Employer=new Employer()
    jobRole: string=''
    skills:any=''
    jobType:string=''
    salary:number=0
    isActive:string=''
    experience:string=''
    isDisable:any=false;
    button:string=''
}
