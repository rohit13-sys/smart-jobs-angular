import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Login } from '../pojo/login';
import { Recruiter } from '../pojo/recruiter';

@Injectable({
  providedIn: 'root'
})
export class RecruiterServiceService {


  recruiter=new Recruiter();

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

    return throwError(
      'Something bad happened;please try again later')
  }


  data:any='';
  public registerRecruiter(recruiter:Recruiter):Observable<Recruiter>{
    this.data=this.http.post<Recruiter>("http://localhost:9090/Employee/registerEmployee",recruiter,
    {observe:'response'});

    return this.data;
  }

  public getRecruiter(email:string){
    const url=`http://localhost:9090/Employee/getEmployee/`
   return this.data=this.http.get<Recruiter>(url,{params:{empId:email}}).pipe(catchError(this.handleError));
  }
 
}


