import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordstatus',
  standalone: true
})
export class OrdstatusPipe implements PipeTransform {

  transform(value: any): any {
    // console.log("Value ", value)
    if(value === 1)
    {
      return "Delivered";
    } else if (value === 2)
    {
      return "Rejected";
    } else if (value === 3)
    {
      return "New Order";
    }
    
  }

}
