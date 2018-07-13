import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoiceRecorderService {

  constructor() { }

  start(): Observable<boolean> {
    return of(true);
  }

  stop(): Observable<any> {
    return of('audio');
  }
}
