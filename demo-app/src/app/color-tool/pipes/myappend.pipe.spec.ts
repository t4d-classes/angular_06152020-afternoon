import { MyappendPipe } from './myappend.pipe';

describe('MyappendPipe', () => {
  it('create an instance', () => {
    const pipe = new MyappendPipe();
    expect(pipe).toBeTruthy();
  });
});
