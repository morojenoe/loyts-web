import { Observable } from 'rxjs';
import { Application } from '../models/application';

export interface IApplicationService {
  getApplications(): Observable<Application[]>;
  filterApplications(filterValue: string): Observable<Application[]>;
  getCountApplicationProposals(applications: Application[]): number[];
}
