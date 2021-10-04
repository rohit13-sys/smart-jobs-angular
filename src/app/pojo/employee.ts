import { Login } from "./login";
import { Skills } from "./skills";

export class EmployeePersonal {
    login:Login=new Login();
    seekerName!:string;
    seekerMobile!:string;
    gender!:string;
    skills:Skills=new Skills();
    empEducation:jsEduId = new jsEduId()
    empExperience:jsExpId = new jsExpId()
}

export class jsEduId{
    login:Login=new Login();
    sscResult!:string;
    hscResult!:string;
    universityName!:string;
    startDate!:Date;
    endDate!:Date;
    percentage!:number;
    cgpa!:number;
}

export class jsExpId{
    login:Login=new Login();
    companyName!:string;
    isCurrentActive!:false;
    yearOfExp!:number;
    jobTitle!:string;
    description!:string;
}
