import { AbstractControl } from '@angular/forms';

export const myRequired = (c: AbstractControl) => {

  if (c.value == null || String(c.value).length === 0) {
    return {
      myRequired: true, // required validator failed
    };
  }

  return null; // validation was successful

};
