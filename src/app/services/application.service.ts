import { Injectable } from '@angular/core';
import { Application } from '../models/application';
import { Observable, of } from 'rxjs';
import { IApplicationService } from '../interfaces/i-application-service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService implements IApplicationService {
  constructor() { }

  getApplications(): Observable<Application[]> {
    return of([
      new Application(1, 'english', ['music', 'rock', 'alternative'], new Date(Date.now()), null),
      new Application(2, 'english',
                      ['sport', 'football', 'FIFA World Cup 2018', 'disappointment', 'prediction'],
                      new Date(Date.now()), null),
      new Application(3, 'english', ['hollywood walk of fame'], new Date(Date.now()), null),
      new Application(4, 'chinese', ['culture', 'street food'], new Date(Date.now()), null),
      new Application(5, 'french', ['paris', 'attraction', 'landmark'], new Date(Date.now()), null),
      new Application(6, 'french', [], new Date(Date.now()), null),
      new Application(7, 'german', [], new Date(Date.now()), null),
      new Application(8, 'german', ['politics', 'election'], new Date(Date.now()), null),
      new Application(9, 'chinese', ['tell me about shanghai'], new Date(Date.now()), null),
      new Application(10, 'french', ['everything'], new Date(Date.now()), null),
    ]);
  }
}
