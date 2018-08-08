import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../login/auth.service';
import {Orders} from './Orders';
import { OrderService } from './order.service';

@Component({
    selector: 'app-createorder',
    templateUrl: './createorder.component.html',
    styleUrls: ['./createorder.component.css']
})
export class CreateorderComponent implements OnInit {

    constructor(private _route: ActivatedRoute, private _router: Router, private orderService: OrderService) { }


    userName: string
    public now: Date;
    item: string
    price: string;
    quantity: string;
    order: Orders[]  = [];
    message:string;


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
        this.orderService.postOrder(this.order)
            .subscribe(data => {
                if (data.message === "Order has been taken successfully") {
                    this.message = data.message;
                    this.order =[]; 
                }
            }
            , (err) => console.log('Error', err));
    };


    addOrder(): void {
        this.order.push(new Orders(this.item, this.price, this.quantity)); 
    }
    
        removeOrder(): void {
        this.order.splice(-1); 
    }
}
