import { Login } from "./login"
import { Skills } from "./skills"

export class JobSeeker {
    seekerName: string = ''
    login:Login = new Login()
    seekerMobile: string = ''
    skills : Skills[] = []
    resume: string = "."
    photo: string = "."
}
