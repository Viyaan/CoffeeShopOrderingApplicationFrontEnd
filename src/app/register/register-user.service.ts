import {Injectable} from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

import { IRegister } from './register';




@Injectable()
export class RegisterUserService {
        
    
     httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
  };
    

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8080/registration';


  public createUser(register) {
      let body = JSON.stringify(register);
    return this.http.post(this.userUrl, body, this.httpOptions).pipe(retry(3), 
      catchError(this.handleError)
    );

  }


  private handleError(error: HttpErrorResponse) {
   console.log(error);
  };

}
