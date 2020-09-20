import { ExamplePipe } from './pipes.pipe';

describe('PipesPipe', () => {
  it('create an instance', () => {
    const pipe = new ExamplePipe();
    expect(pipe).toBeTruthy();
  });
});
