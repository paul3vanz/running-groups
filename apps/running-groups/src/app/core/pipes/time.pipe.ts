import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment-mini';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(time: string): string {
    const timeAsMoment = moment(time, 'HH:mm:ss');

    return timeAsMoment.minutes() > 0 ? timeAsMoment.format('h:mma') : timeAsMoment.format('ha');
  }
}
