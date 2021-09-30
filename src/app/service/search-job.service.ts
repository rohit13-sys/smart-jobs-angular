import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Postedjob } from '../pojo/postedjob';
import { Job } from '../seeker/job-search/job';

@Injectable({
  providedIn: 'root'
})
export class SearchJobService {

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
    return throwError(
      `Something bad happened; please try again later.`);
  }


  postedJobApiUrl = 'http://localhost:9090/jobpost'
  
  getServerPostedJobs(){
    return this.http.get<Job[]>(this.postedJobApiUrl)
    .pipe(catchError(this.handlerError))
  }

}
