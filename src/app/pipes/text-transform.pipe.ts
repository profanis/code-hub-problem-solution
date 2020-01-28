import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTransform'
})
export class TextTransformPipe implements PipeTransform {

  transform(value: string, args: string): any {
    return args === 'lower' ? value.toLowerCase() : value.toUpperCase();
  }

}
