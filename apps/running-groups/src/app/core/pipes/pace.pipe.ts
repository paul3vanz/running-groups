import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment-mini';

@Pipe({
  name: 'pace',
})
export class PacePipe implements PipeTransform {
  transform(paces: string[]): string {
    const paceFrom = paces[0] ? this.formatPace(paces[0]) : null;
    const paceTo = paces[1] ? this.formatPace(paces[1]) : null;

    const formattedPace = paceTo ? `${paceFrom}-${paceTo}` : paceFrom;

    return `${formattedPace} min/mile`;
  }

  formatPace(pace: string): string {
    const paceAsMoment = moment(pace, 'HH:mm:ss');

    return paceAsMoment.seconds() > 0 ? paceAsMoment.format('m:ss') : paceAsMoment.format('m');
  }
}
