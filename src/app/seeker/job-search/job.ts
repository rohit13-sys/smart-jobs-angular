import { Employer } from "src/app/pojo/employer"
import { Skills } from "src/app/pojo/skills"

export class Job {
    jobPostId:any=0
    employee:Employer=new Employer()
    jobRole: string=''
    skills:Skills[] = []
    jobType:string=''
    salary:number=0
    isActive:string=''
    experience:string=''
    button:string=''
    isApplied:boolean = false
}
