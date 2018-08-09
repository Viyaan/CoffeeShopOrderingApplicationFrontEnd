import { Component, OnInit } from '@angular/core';
import { ViewOrderService } from './view-order.service';
import {IOrder} from './Order';
import { PagerService } from './pager.service';

@Component({
    selector: 'app-view-order',
    templateUrl: './view-order.component.html',
    styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
    orderLists: IOrder[];
  orderListsp:[""];
    errorMessage: string;
  filterOrder='';
  pager: any = {};
  pagedItems: any[];
    constructor(private viewOrderService: ViewOrderService, private pagerService: PagerService) { }

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
  
  setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.orderLists.length, page);

        // get current page of items
        this.pagedItems = this.orderLists.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}
