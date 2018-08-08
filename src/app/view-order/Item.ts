export class IItem {
  itemId: string;
  itemName: string;
  price: string;
  quantity: string;
  
   constructor(itemId, itemName, price, quantity) {

     this.itemId=itemId;
     this.itemName=itemName;
     this.price=price;
     this.quantity=quantity;
     
   }
}
