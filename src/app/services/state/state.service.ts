import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private isLoading: BehaviorSubject<boolean>;

  constructor() {
    this.isLoading = new BehaviorSubject<boolean>(false);
  }

  setIsLoading(isLoading: boolean): void {
    this.isLoading.next(isLoading);
  }

  getIsLoading(): Observable<boolean> {
    return this.isLoading.asObservable();
  }
}
