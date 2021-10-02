import { Jobs } from "./jobs"
import { Jpersonal } from "./jpersonal"

export class AppliedJob {
    jspersonal:Jpersonal=new Jpersonal()
    jobPost:Jobs= new Jobs()
    rejectedDate:any
    appliedDate:any
    jobStatus:string=''
}

