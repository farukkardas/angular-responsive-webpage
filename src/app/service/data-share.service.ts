import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  private sidenavSubject = new BehaviorSubject<string>('');
  openSidenav = this.sidenavSubject.asObservable()
  constructor() { }

  open(message:string) {
    this.sidenavSubject.next(message)
  }
}

