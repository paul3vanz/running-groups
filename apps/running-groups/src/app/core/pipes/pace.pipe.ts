import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pace',
})
export class PacePipe implements PipeTransform {
  transform(paces: string[]): string {
    const paceFrom = paces[0];
    const paceTo = paces[1];
    switch (paces.length) {
      case 1:
        return paces[0];
    }
  }
}
