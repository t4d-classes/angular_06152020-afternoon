import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myappend'
})
export class MyappendPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return String(value) + args.join('');
  }

}
