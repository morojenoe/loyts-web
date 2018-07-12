import { Injectable } from '@angular/core';
import { Application } from '../models/application';
import { Proposal } from '../models/proposal';
import { Observable, of } from 'rxjs';
import { IApplicationService } from '../interfaces/i-application-service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService implements IApplicationService {
  readonly applicationUrl = '/api/applications';
  constructor(private http: HttpClient) { }

  getApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(this.applicationUrl);
  }

  filterApplications(filterValue: string): Observable<Application[]> {
    if (!filterValue.trim()) {
      return this.getApplications();
    }
    return this.http.get<Application[]>(this.applicationUrl).pipe(
      map(applications =>
        applications.filter(app => {
          return (
            app.tags.findIndex(tag => tag === filterValue) !== -1 ||
            app.language === filterValue
          );
        })
      )
    );
  }

  getProposals(): Observable<Proposal[]> {
    const url = `/api/proposals`;
    return this.http.get<Proposal[]>(url);
  }

  addProposal(proposal: Proposal): Observable<Proposal> {
    return this.http.post<Proposal>('/api/proposals', proposal);
  }

  getMyApplication(): Observable<Application> {
    return this.getApplications().pipe(
      map(applications => applications[10])
    );
  }

  addApplication(application: Application): Observable<Application> {
    return this.http.post<Application>(this.applicationUrl, application);
  }
}
