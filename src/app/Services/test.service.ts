import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Test } from '../Classes/test';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  REST_API:string='http://localhost:8000/api'; //API
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private httpClient:HttpClient) { }
  // Add
  AddTest(data: Test): Observable<any> {
    let API_URL = `${this.REST_API}/add-test`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }

  // Get all 
  GetTests() {
    return this.httpClient.get(`${this.REST_API}/get-allTest`);
  }

  // Get single object
  GetTest(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/read-test/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Update
  updateTest(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/update-test/${id}`;
    return this.httpClient
      .put(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  // Delete
  deleteTest(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-test/${id}`;
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
