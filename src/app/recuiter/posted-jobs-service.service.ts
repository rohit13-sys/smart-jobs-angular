import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Postedjob } from './rdashboard/postedjob';

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


}
