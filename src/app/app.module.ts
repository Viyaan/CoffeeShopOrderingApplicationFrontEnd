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
import {PagerService} from './view-order/pager.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule, MatIconModule } from '@angular/material';
import {ViewOrderPipe} from './view-order/view-order.pipe';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        AboutComponent,
        CreateorderComponent,
        ViewOrderComponent,
        ViewOrderPipe,

    ],
    imports: [
        BrowserModule, CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule,BrowserAnimationsModule,MatFormFieldModule,MatInputModule,MatButtonModule, MatIconModule, RouterModule.forRoot([
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'about', component: AboutComponent },
             { path: 'createOrder', component: CreateorderComponent },
             { path: 'view-order', component: ViewOrderComponent },
             {path: '', redirectTo: 'login', pathMatch: 'full'}


        ])
    ],
    exports: [BrowserAnimationsModule,MatFormFieldModule,MatInputModule,MatButtonModule, MatIconModule],
    providers: [AuthService, RegisterUserService,OrderService, ViewOrderService, PagerService],
    bootstrap: [AppComponent]
})
export class AppModule { }
