import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {AuthService} from './login/auth.service';
import { RegisterComponent } from './register/register.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,

    ],
    imports: [
        BrowserModule, CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot([
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },


        ])
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }
