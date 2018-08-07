import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, NgForm, AbstractControl} from '@angular/forms';
import {IRegister} from './register';
import { Router } from '@angular/router';
import { RegisterUserService } from './register-user.service';





@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   userForm: FormGroup;
    user: IRegister = new IRegister();
    emailMessage: string;
  
  
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }

   

   

  

   

  constructor(private router: Router, private registerUserService: RegisterUserService) {

  }

  createUser(): void {
    this.registerUserService.createUser(this.user)
        .subscribe( data => {
          alert("User registered successfully.");
        });

  };
}
