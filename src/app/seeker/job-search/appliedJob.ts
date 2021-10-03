import { Job } from "./job"
import { Jpersonal } from "./jpersonal"

export class AppliedJob {
    jobStatusId:number = 0
    jspersonal:Jpersonal=new Jpersonal()
    jobPost:Job= new Job()
    rejectedDate!:Date
    jobStatus:string=''
    applyDate!: Date
}

