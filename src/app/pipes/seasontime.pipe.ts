import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'seasontime'})
export class SeasonTimePipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return value;
    /*The API returns the time with a semi colon at the end.
    We also want to add a hyphen*/
    return ' - ' + value.replace(";","");
  }
}
