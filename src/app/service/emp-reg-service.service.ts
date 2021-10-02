import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Employee } from '../pojo/employee';

@Injectable({
  providedIn: 'root'
})
export class EmpRegServiceService {

  constructor(private http:HttpClient) { }

  data:any='';
  public registerRecruiter(emp:Employee){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(emp);
    return this.http.post("http://localhost:9090/Employee/registerEmployee",body,
    {'headers':headers,observe:'response'}).pipe(catchError(this.handleError));

  }

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
}
