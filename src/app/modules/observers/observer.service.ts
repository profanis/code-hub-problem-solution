import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObserverService {

  ping = new Subject<string>();

  propagateData() {
    this.ping.next('pong');
  }

}
