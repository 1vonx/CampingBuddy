import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceValue'
})
export class PriceValuePipe implements PipeTransform {

  transform(value: any): unknown {
    return Number(value) !== 0 ? value + '€' : 'Free of Charge';
    // || !isNaN(Number(value))
  }

}
