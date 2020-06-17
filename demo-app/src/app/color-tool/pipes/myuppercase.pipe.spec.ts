import { MyuppercasePipe } from './myuppercase.pipe';

describe('MyuppercasePipe', () => {
  it('create an instance', () => {
    const pipe = new MyuppercasePipe();
    expect(pipe).toBeTruthy();
  });
});
