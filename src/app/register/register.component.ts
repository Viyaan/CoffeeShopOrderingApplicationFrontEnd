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
    errorMessage: string


    ngOnInit(): void {
        // throw new Error('Method not implemented.');
    }

    constructor(private router: Router, private registerUserService: RegisterUserService) {

    }

    createUser(): void {
        this.registerUserService.createUser(this.user)
            .subscribe(data => {
                if (data.message === "User already registered with the email provided") {
                    this.errorMessage = data.message;
                    this.router.navigate(['/register'])
                }
                else if (data.message === "User has been registered successfully") {
                    this.router.navigate(['/login'])
                }

            }
            , (err) => console.log('Error', err)); 
    };
}