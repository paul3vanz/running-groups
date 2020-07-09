import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IsLoadingService {
  loadingCounter: number;

  constructor() {}

  isLoading() {
    return this.loadingCounter > 0;
  }

  loadingStart() {
    this.loadingCounter++;
  }

  loadingComplete() {
    this.loadingCounter--;
  }
}
