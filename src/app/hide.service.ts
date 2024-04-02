import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HideService {

  private componentState = new Subject<boolean>();

  componentState$ = this.componentState.asObservable();

  setComponentState({ state }: { state: boolean; }): void {
    this.componentState.next(state);
  }

  constructor() { }
}
