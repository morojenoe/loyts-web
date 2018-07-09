import { Observable } from 'rxjs';
import { Application } from '../models/application';
import { Proposal } from '../models/proposal';

export interface IApplicationService {
  getApplications(): Observable<Application[]>;
  filterApplications(filterValue: string): Observable<Application[]>;
  getProposals(): Observable<Proposal[]>;
}
