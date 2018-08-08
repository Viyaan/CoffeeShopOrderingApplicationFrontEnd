import { IItem } from './Item';

export class IOrder {
  orderId: string;
  status: string;
  tokenNo: string;
  items: IItem[];
  
   constructor(orderId, status, tokenNo, items) {

     this.orderId=orderId;
     this.status=status;
     this.tokenNo=tokenNo;
     this.items=items;
     
   }
}

