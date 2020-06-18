import { Pipe, PipeTransform } from '@angular/core';
import { isNil } from 'lodash';


@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(text: unknown, maxTextLength: unknown): unknown {

    // if (typeof text !== 'string' || typeof maxTextLength !== 'number') {
    //   return '';
    // }

    // check for null and undefined
    // if (text === null || text === undefined) {
    if (isNil(text)) {
      return '';
    }

    if (typeof text === 'object') {
      return '';
    }

    const sText = String(text);

    // more restrictive
    // if (typeof maxTextLength !== 'number') {
    //   return sText;
    // }

    // more adaptable
    const nMaxTextLength = Number(maxTextLength);

    if (isNaN(nMaxTextLength)) {
      return sText;
    }

    if (sText.length <= nMaxTextLength) {
      return sText;
    } else {
      return sText.slice(0, nMaxTextLength) + '...';
    }
  }

}
