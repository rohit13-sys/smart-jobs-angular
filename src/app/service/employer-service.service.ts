import { HttpClient,HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Employer } from '../pojo/employer';
import { JobSeeker } from '../pojo/job-seeker';

@Injectable({
  providedIn: 'root'
})
export class EmployerServiceService {

  constructor(private http: HttpClient) { }

  private handleError(errResp:HttpErrorResponse){
    if(errResp.error instanceof ErrorEvent){
      console.error("An Error Occured: ",errResp.error.message);
    }
    else{
      console.error(`Backend returned code ${errResp.status},+
      body was: ${errResp.error}`);
    }
    return throwError('Someting bad happened; Please try again later.')
  }

  emploerUrl = 'http://localhost:9090/Employee'

  public registerSeeker(recruiter:Employer){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(recruiter);
    return this.http.post("http://localhost:9090/Employee/registerEmployee",body,
    {'headers':headers,observe:'response'}).pipe(catchError(this.handleError));

  }

  public registerEmp(jobseeker:JobSeeker){
    console.log("js",jobseeker);
    
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(jobseeker);
    return this.http.post("http://localhost:9090/api/v1/personal/savePersonalDetails",body,
    {'headers':headers,observe:'response'}).pipe(catchError(this.handleError));
  }

  getEmpById(email:any){
      const headers = { 'content-type': 'application/x-www-form-urlencoded'}
      let body = new HttpParams()
      body = body.set('empId',email)
      return this.http.post<Employer>(this.emploerUrl+'/getEmployee',body,{'headers':headers}).pipe(catchError(this.handleError))
  }

}
