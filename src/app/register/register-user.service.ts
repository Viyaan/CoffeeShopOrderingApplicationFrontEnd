import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IRegister } from './register';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RegisterUserService {

  constructor(private http:HttpClient) {}

  //private userUrl = 'http://localhost:8080/user-portal/user';
  private userUrl = 'http://localhost:8080/registration';

  //public getUsers() {
  //  return this.http.get<IRegister[]>(this.userUrl);
 // }

//  public deleteUser(user) {
 //   return this.http.delete(this.userUrl + "/"+ user.id);
//  }

  public createUser(register) {
    return this.http.post<IRegister>(this.userUrl, register);
  }

}
