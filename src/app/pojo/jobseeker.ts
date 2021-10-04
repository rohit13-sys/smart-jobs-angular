import { Login } from "./login"
import { Skills } from "./skills"

export class Jobseeker {
    seekerName: string = ''
    login:Login = new Login()
    seekerMobile: string = ''
    skills : Skills[] = []
    experiance:number=0
    gender:string=''
    languages:string=''
    address:string=''
}
