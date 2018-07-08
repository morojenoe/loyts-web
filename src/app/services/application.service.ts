import { Injectable } from '@angular/core';
import { Application } from '../models/application';
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

  getApplicationProposalCount(applicationId: number): number {
    return 1;
  }

  getCountApplicationProposals(applications: Application[]): number[] {
    const countProposals = [];
    for (let i = 0; i < applications.length; i += 1) {
      countProposals.push(this.getApplicationProposalCount(applications[i].id));
    }
    return countProposals;
  }
}
