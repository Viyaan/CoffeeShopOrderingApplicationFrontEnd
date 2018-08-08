import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from './auth.service';
import {User} from './user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    userName: string;
    password: string;
    title: string
    errorMessage: string

    constructor(private _router: Router, private auth: AuthService) {
        }
        

    ngOnInit() {
        
    }

    loginUser(): void {

        this.auth.getUserDetails(this.userName, this.password).subscribe((res) => {
            // localStorage.setItem('token', res.token);
            console.log(res);
            if (res.message === 'Authenticated') {
                this._router.navigate(['createOrder'], { queryParams: { "userName": this.userName, "loginDate": new Date() } })
            } else if (res.message === 'Password Mismatch') {
                this.errorMessage = res.message;
            } else if (res.message === 'User does not Exist, Please register yourself') {
                this.errorMessage = res.message;
            }
        }
            , (err) => this.handleError(err));
    }

    handleError(err: string): void {
        this.errorMessage = err;
    }
    
}