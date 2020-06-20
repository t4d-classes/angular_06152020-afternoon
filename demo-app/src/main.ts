import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

const doA = () => {
  return new Promise(resolve => {
    console.log('running promise');
    setTimeout(() => {
      resolve('a');
    }, 2000);
  });
};

// const p = doA();

// p.then(result => console.log(result));
// p.then(result => console.log(result));



// const doB = () => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('b');
//     }, 1000);
//   });
// };

// doA()
//   .then(result => {
//     console.log(result);
//     return doB();
//   })
//   .then(result => {
//     console.log(result);
//   });

// import { Observable, Subscriber } from 'rxjs';
// import { map, filter, take } from 'rxjs/operators';

// type NumCounter = {
//   id: number,
//   c: number,
// };

// let subscriberCount = 0;

// const num$ = new Observable((subscriber: Subscriber<NumCounter>) => {

//   console.log('creating subscription');

//   let counter = 0;
//   const subscriberId = subscriberCount++;

//   const handle = setInterval(() => {

//     if (subscriber.closed) {
//       clearInterval(handle);
//       console.log('stopped generating values');
//       return;
//     }

//     console.log('generating a new value');
//     subscriber.next({ id: subscriberId, c: counter++ });
//   }, 500);

//   // setTimeout(() => {
//   //   clearInterval(handle);
//   //   subscriber.complete();

//   // }, 4000);

// });

// const fns = [
//   filter((num: NumCounter) => num.c % 2 === 0),
//   map((num: NumCounter) => num.c * 2),
//   take(3),
// ];

// const subscription = num$
//   .pipe(
//     ...fns as [],
//   )
//   .subscribe({
//     next: num => console.log(num),
//     complete: () => console.log('subscription completed')
//   });

// // setTimeout(() => {
// //   subscription.unsubscribe();
// //   console.log('canceled the subscription');
// // }, 4000);



