import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Postedjob } from '../pojo/postedjob';
import { Job } from '../seeker/job-search/job';
import { AppliedJob } from '../seeker/job-search/appliedJob';

@Injectable({
  providedIn: 'root'
})
export class SearchJobService {
  appliedJobs:AppliedJob[]=[];

  constructor(private http: HttpClient) { }

  private handlerError(errResp: HttpErrorResponse){

    if(errResp.error instanceof ErrorEvent){
      // A client-side or network error occured. handle it accordingly.
      console.error('An error occurred:', errResp.error.message);
    }else {
      //The backend returned an unsuccessful response code.
      //The response body may contain clues as to what wend wrong
      console.error(
        `Backend returned code ${errResp.status},`+
        `body was: ${errResp.error}`);
    }
    //Return an observable with a user-facing error message.
    return throwError(errResp);
  }


  postedJobApiUrl = 'http://localhost:9090/jobpost'
  
  getServerPostedJobs(){
    return this.http.get<Job[]>(this.postedJobApiUrl)
    .pipe(catchError(this.handlerError))
  }

  addAppliedJob(appliedjob:AppliedJob){
    const headers = { 'content-type': 'application/json'} 
      console.log("ss:" + appliedjob.jspersonal.login.userId);
       
      const body=JSON.stringify(appliedjob);
      console.log(body)
      return this.http.post('http://localhost:9090/api/v1/applyJob', body,{'headers':headers,observe:'response'}).pipe(catchError(this.handlerError))
     }

   getAppliedJobsByid(id:any){
     return this.http.get<Job[]>('http://localhost:9090/api/v1/getAppliedJobs/${id}').pipe(catchError(this.handlerError))
   }  

   getAllAppliedJobs(){
    return this.http.get<AppliedJob[]>('http://localhost:9090/api/v1/getAllAppliedJobs').pipe(catchError(this.handlerError))
  }  
}
