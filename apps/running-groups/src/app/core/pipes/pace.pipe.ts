import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment-mini';

@Pipe({
  name: 'pace',
})
export class PacePipe implements PipeTransform {
  transform(pace: string[] | string, alwaysShowSeconds: false): string {
    let formattedPace: string;

    if (typeof pace === 'string') {
      formattedPace = this.formatPace(pace, alwaysShowSeconds);
    } else {
      const paceFrom = pace[0] ? this.formatPace(pace[0], alwaysShowSeconds) : null;
      const paceTo = pace[1] ? this.formatPace(pace[1], alwaysShowSeconds) : null;

      formattedPace = paceTo ? `${paceFrom}-${paceTo}` : paceFrom;
    }
    return formattedPace;
  }

  formatPace(pace: string, alwaysShowSeconds: boolean): string {
    const paceAsMoment = moment(pace, 'HH:mm:ss');

    return paceAsMoment.seconds() > 0 || alwaysShowSeconds ? paceAsMoment.format('m:ss') : paceAsMoment.format('m');
  }
}
