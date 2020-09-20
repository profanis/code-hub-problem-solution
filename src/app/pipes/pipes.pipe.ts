import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'example_pipe'
})
export class ExamplePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
