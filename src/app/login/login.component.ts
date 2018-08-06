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
  role:string

  constructor(private _router: Router, private auth: AuthService) {}

  ngOnInit() {
  }


    
  loginUser(): void {

    this.auth.getUserDetails(this.userName, this.password).subscribe((res) => { 
      localStorage.setItem('token', res.token);
      if (this.role === 'USER') {
        this._router.navigate(['viewContacts'])
      } else if (this.role === 'ADMIN') {
        this._router.navigate(['viewUsers'])
      } else if (this.role) {
        this.errorMessage = this.role;
      }
    }
      , (err) => this.handleError(err));
  }

  handleError(err: string): void {
    this.errorMessage = err;
  }

}

