import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment-mini';

@Pipe({
  name: 'pace',
})
export class PacePipe implements PipeTransform {
  transform(paces: string[]): string {
    const paceFrom = paces[0] ? this.formatPace(paces[0]) : null;
    const paceTo = '00:09:00' ? this.formatPace('00:09:00') : null;

    const formattedPace = paceTo ? `${paceFrom}-${paceTo}` : paceFrom;

    return `${formattedPace} min/mile`;
  }

  formatPace(pace: string): string {
    const paceAsMoment = moment(pace, 'HH:mm:ss');

    console.log(paceAsMoment.minutes());

    return paceAsMoment.minutes() > 0 ? paceAsMoment.format('m:ss') : paceAsMoment.format('m');
  }
}
