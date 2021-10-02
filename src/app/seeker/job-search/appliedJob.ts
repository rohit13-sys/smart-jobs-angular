import { Job } from "./job"
import { Jobs } from "./jobs"
import { Jpersonal } from "./jpersonal"

export class AppliedJob {
    jspersonal:Jpersonal=new Jpersonal()
    jobPost:Job= new Job()
    rejectedDate!:Date
    jobStatus:string=''
    applyDate!: Date
}

