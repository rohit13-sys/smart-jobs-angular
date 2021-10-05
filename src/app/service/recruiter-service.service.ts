import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Employer } from '../pojo/employer';
import { Login } from '../pojo/login';
import { Recruiter } from '../pojo/recruiter';

@Injectable({
  providedIn: 'root'
})
export class RecruiterServiceService {

  constructor(private http:HttpClient) { }

  //handle error
  private handleError(errResp:HttpErrorResponse){
    if(errResp.error  instanceof ErrorEvent){
      console.error('An error occurred:',errResp.error.message);
    }
    else{
      console.error(
        `Backend returned code ${errResp.status} ,`+
        `body was : ${errResp.error}`);
    }
    console.log("inerr: "+errResp.status);
    
    return throwError(errResp)
      //'Something bad happened;please try again later')
  }


  data:any='';
  public registerRecruiter(recruiter:Employer){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(recruiter);
    return this.http.post("http://localhost:9090/Employee/registerEmployee",body,
    {'headers':headers,observe:'response'}).pipe(catchError(this.handleError));

  }

  public getRecruiter(email:string){
    const url=`http://localhost:9090/Employee/getEmployee/`
   return this.data=this.http.post<Employer>(url,{params:{empId:email}}).pipe(catchError(this.handleError));
  }

  public updateProfile(employer:Employer){
    const url='http://localhost:9090/Employee/updateEmployee'
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(employer);
    return this.http.put<Employer>(url,employer,{'headers':headers,observe:'response'}).pipe(catchError(this.handleError))
  }
 
  
}


