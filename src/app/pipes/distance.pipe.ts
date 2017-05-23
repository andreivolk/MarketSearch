import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'distance'})
export class DistancePipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return value;
    /*The API returns the distance as part of the name string
    we want to make it more obvious as well as intuitive for the user.
    We achieve this by splitting the number off and moving it after the name
    as well as adding the units of distance, in this case miles.*/
    var distance = value.split(' ')[0];
    return '<span class="market-name">' + (value.substring(value.indexOf(' ') + 1) + '</span>' + '<span class="pull-right">' + distance + '</span>');
  }
}
