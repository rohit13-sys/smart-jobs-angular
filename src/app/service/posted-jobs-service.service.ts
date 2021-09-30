import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Postedjob } from '../pojo/postedjob';

@Injectable({
  providedIn: 'root'
})
export class PostedJobsServiceService {

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


  postedJobApiUrl = 'http://localhost:9090/jobpost'
  
  getServerPostedJobs(){
    return this.http.get<Postedjob[]>(this.postedJobApiUrl)
    .pipe(catchError(this.handleError))
  }

  addJob(postJob:Postedjob){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(postJob);
    console.log(body)
    return this.http.post(this.postedJobApiUrl + '/addjob', body,{'headers':headers,responseType:'text' as 'json'}).pipe(catchError(this.handleError))
  }

  deleteJobById(id:number){
    const deleteJobUrl = `${this.postedJobApiUrl}/delete/${id}`
    return this.http.delete<string>(deleteJobUrl,{responseType:'text' as 'json'}).pipe(catchError(this.handleError))
  }

  getJobById(id:number){
    const getIdUrl = `${this.postedJobApiUrl}/findjbyid/${id}`
    return this.http.get<Object>(getIdUrl).pipe(catchError(this.handleError))
  }

  updateJob(postJob:Postedjob){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(postJob);
    console.log(body)
    return this.http.post(this.postedJobApiUrl + '/updateJob', body,{'headers':headers,responseType:'text' as 'json'}).pipe(catchError(this.handleError))
  }
  
}
