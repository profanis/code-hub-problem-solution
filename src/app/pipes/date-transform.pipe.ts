import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTransform'
})
export class DateTransformPipe implements PipeTransform {

  transform(value: Date, showTime: boolean): any {
    const date = value.getDate();
    const month = value.getMonth() + 1;
    const year = value.getFullYear();
    const hours = value.getHours();
    const minutes = value.getMinutes();
    const seconds = value.getSeconds();

    const timeDisplay = `${hours}:${minutes}:${seconds}`;

    return `${date}/${month}/${year} ${showTime ? timeDisplay : '' }`;
  }

}
