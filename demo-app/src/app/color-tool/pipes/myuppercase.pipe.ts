import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myuppercase'
})
export class MyuppercasePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return String(value).toUpperCase();
  }

}
