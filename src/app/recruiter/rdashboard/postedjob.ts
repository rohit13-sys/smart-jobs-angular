import { Employer } from "../employer"
import { Skills } from "./skills"

export class Postedjob {
    jobPostId: number = 0
    employee: Employer = new Employer()
    jobRole: string = ""
    skills: Skills[] = []
    jobType: string = ""
    salary: number = 0
    isActive: string = ''
    experience: string = ''
    officeAddress:string =''
    vacancies:number = 0
    postedDate:Date = new Date()
}
