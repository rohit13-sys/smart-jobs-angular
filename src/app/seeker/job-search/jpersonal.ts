import { Jsskills } from "src/app/pojo/jsskills";
import { Login } from "src/app/pojo/login";

export class Jpersonal {
    login:Login=new Login()
    seekerName:string = ''
    seekerMobile:number= 0
    photo:string = ''
    resume:string = ''
    skills:Jsskills[] = []
}
