import { Observable } from 'rxjs';
import { Application } from '../models/application';

export interface IApplicationService {
  getApplications(): Observable<Application[]>;
}
