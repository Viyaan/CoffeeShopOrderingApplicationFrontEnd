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
  constructor(private viewOrderService : ViewOrderService ) { }

  ngOnInit() {
  }
  
  fetchOrders() {
    this.viewOrderService.fetchOrders().subscribe((orders) => { this.orderLists = orders,
                                                                     (error) => this.errorMessage = error });
  }
  
  

}
