import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Application } from '../models/application';
import { Proposal } from '../models/proposal';
import { subMinutes } from 'date-fns';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const appDate = new Date(Date.now());
    const applications = [
      new Application(1, 'english', ['music', 'rock', 'alternative'], appDate, 3, null),
      new Application(2, 'english',
                      ['sport', 'football', 'FIFA World Cup 2018', 'disappointment', 'prediction'],
                      subMinutes(appDate, 2), 5, null),
      new Application(3, 'english', ['hollywood walk of fame'], subMinutes(appDate, 10), 22, null),
      new Application(4, 'chinese', ['culture', 'street food'], subMinutes(appDate, 30), 59, null),
      new Application(5, 'french', ['paris', 'attraction', 'landmark'], subMinutes(appDate, 59), 31, null),
      new Application(6, 'french', [], subMinutes(appDate, 60), 18, null),
      new Application(7, 'german', [], subMinutes(appDate, 80), 3, null),
      new Application(8, 'german', ['politics', 'election'], subMinutes(appDate, 100), 11, null),
      new Application(9, 'chinese', ['tell me about shanghai'], subMinutes(appDate, 120), 15, null),
      new Application(10, 'french', ['everything'], subMinutes(appDate, 28), 66, null),
    ];
    const proposals: Proposal[] = [
      {
        id: 1,
        applicationId: 1,
        audio: undefined,
      },
      {
        id: 2,
        applicationId: 3,
        audio: undefined,
      },
      {
        id: 3,
        applicationId: 8,
        audio: undefined,
      },
    ];
    return {applications, proposals};
  }
}
