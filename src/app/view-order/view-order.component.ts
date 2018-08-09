import { Component, OnInit } from '@angular/core';
import { ViewOrderService } from './view-order.service';
import {IOrder} from './Order';

@Component({
    selector: 'app-view-order',
    templateUrl: './view-order.component.html',
    styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
    orderLists: IOrder;
    errorMessage: string;
  filterOrder='';
    constructor(private viewOrderService: ViewOrderService) { }

    ngOnInit() {
        this.fetchOrders();
    }

    fetchOrders() {
        this.viewOrderService.fetchOrders().subscribe((orders) => {
        this.orderLists = orders,
            console.log(this.orderLists[0].orderId);
            (error) => this.errorMessage = error  
        }
        );
    }
}
