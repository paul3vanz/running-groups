import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials',
})
export class InitialsPipe implements PipeTransform {
  transform(value: string, limit: number): string {
    return value.split(' ').map((currentValue) => currentValue.substring(0, 1)).join('').substr(0, limit);
  }
}
