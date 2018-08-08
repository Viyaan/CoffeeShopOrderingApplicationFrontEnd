import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../login/auth.service';
import {Orders} from './Orders';


@Component({
    selector: 'app-createorder',
    templateUrl: './createorder.component.html',
    styleUrls: ['./createorder.component.css']
})
export class CreateorderComponent implements OnInit {

    constructor(private _route: ActivatedRoute, private _router: Router) { }


    userName: string
    public now: Date;
    item: string
    price: int;
    quantity: int;
    order[]:Orders; 


    ngOnInit() {

        this._route
            .queryParams
            .subscribe((params) => {
                console.log(params);
                this.userName = params.userName;
                this.now = params.loginDate;

            })
    }

    createOrder(): void {
        console.log(this.order);
        //this.order.push(new Orders(this.item, this.price, this.quantity));

        console.log(this.order);
    };

    addOrder(): void {
        this.order.push(new Orders(this.item, this.price, this.quantity));
    }
}
