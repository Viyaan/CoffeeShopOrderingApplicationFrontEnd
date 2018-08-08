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
import {RegisterUserService} from './register/register-user.service';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { CreateorderComponent } from './createorder/createorder.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import {OrderService} from './createorder/order.service';
import {ViewOrderService} from './view-order/view-order.service';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        AboutComponent,
        CreateorderComponent,
        ViewOrderComponent,

    ],
    imports: [
        BrowserModule, CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot([
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'about', component: AboutComponent },
             { path: 'createOrder', component: CreateorderComponent },
             { path: 'view-order', component: ViewOrderComponent },
             {path: '', redirectTo: 'login', pathMatch: 'full'}


        ])
    ],
    providers: [AuthService, RegisterUserService,OrderService, ViewOrderService],
    bootstrap: [AppComponent]
})
export class AppModule { }
