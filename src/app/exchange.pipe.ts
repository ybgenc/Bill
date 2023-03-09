import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exchange'
})
export class ExchangePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
 
    return parseFloat(value) * 20;
  }

}
