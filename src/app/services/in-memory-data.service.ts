import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Application } from '../models/application';
import { Proposal } from '../models/proposal';
import { addMinutes } from 'date-fns';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const appDate = new Date(Date.now());
    const applications = [
      new Application(1, 'english', ['music', 'rock', 'alternative'], appDate, 3, null),
      new Application(2, 'english',
                      ['sport', 'football', 'FIFA World Cup 2018', 'disappointment', 'prediction'],
                      addMinutes(appDate, 2), 5, null),
      new Application(3, 'english', ['hollywood walk of fame'], addMinutes(appDate, 10), 22, null),
      new Application(4, 'chinese', ['culture', 'street food'], addMinutes(appDate, 30), 59, null),
      new Application(5, 'french', ['paris', 'attraction', 'landmark'], addMinutes(appDate, 59), 31, null),
      new Application(6, 'french', [], addMinutes(appDate, 60), 18, null),
      new Application(7, 'german', [], addMinutes(appDate, 80), 3, null),
      new Application(8, 'german', ['politics', 'election'], addMinutes(appDate, 100), 11, null),
      new Application(9, 'chinese', ['tell me about shanghai'], addMinutes(appDate, 120), 15, null),
      new Application(10, 'french', ['everything'], addMinutes(appDate, 28), 66, null),
    ];
    const proposals: Proposal[] = [
      {
        id: 1,
        applicationId: 1
      },
      {
        id: 2,
        applicationId: 3,
      },
      {
        id: 3,
        applicationId: 8,
      },
    ];
    return {applications, proposals};
  }
}
