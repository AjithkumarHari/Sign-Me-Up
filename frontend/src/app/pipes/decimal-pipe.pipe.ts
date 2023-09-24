import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalPipe'
})
export class DecimalPipe implements PipeTransform {

  transform(number : number ): string {
    return `$ ${number}.00`
  }

}
