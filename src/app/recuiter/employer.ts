import { Company } from "./company"
import { Login } from "./login"

export class Employer {
    login:Login = new Login()
    empName:string = ''
    empPhoneNo:number = 0
    empBranchId:number = 0
    company:Company = new Company()
}
