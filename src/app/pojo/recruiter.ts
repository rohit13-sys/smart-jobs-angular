export class Recruiter {

    employerNo!: number;
    employerName!: string;
    phoneNo!: string;
    branchOfficeId!: number;
    login!: {
        userId:string;
        pwd: string;
        role: string;
    };
    company!: {
        companyName: string;
        establishmentDate: Date | undefined;
        companyWebsite: string;
    };

   
}
