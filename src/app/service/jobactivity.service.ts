import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JobSeeker } from '../pojo/job-seeker';

@Injectable({
  providedIn: 'root'
})
export class JobactivityService {

  constructor(private http:HttpClient) { }

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

  jobActivityUrl = "http://localhost:9090/api/v1"

  findJobActivity(id:any){
    const headers = { 'content-type': 'application/x-www-form-urlencoded'}
      let body = new HttpParams()
      body = body.set('jbid',id)
    return this.http.post<JobSeeker[]>(this.jobActivityUrl + "/findJobSeeker",body,{'headers':headers}).pipe(catchError(this.handleError))
  }

}
