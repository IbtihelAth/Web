import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Cycle } from '../Classes/cycle';
import { Observable, catchError, map, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CycleService {
  REST_API:string='http://localhost:3001/api'; //API
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient:HttpClient) { }
  // Add
  AddCycle(data: Cycle): Observable<any> {
    let API_URL = `${this.REST_API}/add-cycle`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }
  // Get all 
  GetCycles() {
    return this.httpClient.get(`${this.REST_API}/get-allCycle`);
  }
  // Get single object
  GetCycle(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/read-cycle/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Update
  updateCycle(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/update-cycle/${id}`;
    return this.httpClient
      .put(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  // Delete
  deleteCycle(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-cycle/${id}`;
    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  // Error handleError
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
