import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordfilter',
  standalone: true
})
export class OrdfilterPipe implements PipeTransform {

  transform(value: any, args: string): any {
    return value.filter((item:any)=>{
      // return item.clientname === args;
      // return item.clientname.match(args);
      return JSON.stringify(item).match(args)
    })
   
  }

}
