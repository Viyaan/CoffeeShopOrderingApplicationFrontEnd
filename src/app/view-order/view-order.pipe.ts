import { Pipe, PipeTransform } from '@angular/core';
import {IOrder} from './Order';
@Pipe({
  name: 'viewOrder'
})
export class ViewOrderPipe implements PipeTransform {

  transform(value: IOrder[], filterBy: string): IOrder[] {
    filterBy = filterBy ? filterBy.toLowerCase() : null;
    return filterBy ? value.filter((order:IOrder) => order.status.toLowerCase().indexOf(filterBy) !== -1) : value;
  }

}



