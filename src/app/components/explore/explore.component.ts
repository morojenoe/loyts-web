import { Component, OnInit, Inject, QueryList, ViewChildren } from '@angular/core';
import { IApplicationService } from '../../interfaces/i-application-service';
import { ApplicationService } from '../../services/application.service';
import { Application } from '../../models/application';
import { Observable } from 'rxjs';
import { ApplicationComponent } from '../../shared/application/application.component';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  @ViewChildren(ApplicationComponent) applicationComponents: QueryList<ApplicationComponent>;
  applications$: Observable<Application[]>;
  countProposals: number[];
  searchValue: string;
  playingApplicationId: number;

  constructor(@Inject(ApplicationService) private applicationService: IApplicationService) { }

  ngOnInit() {
    this.setApplications$(this.applicationService.getApplications());
  }

  setApplications$(applicationsObservable: Observable<Application[]>) {
    this.applications$ = applicationsObservable;
    this.applications$.subscribe(
      applications =>
        this.countProposals = this.applicationService.getCountApplicationProposals(applications)
    );
  }

  numberOfProposals(i): string {
    const proposals = this.countProposals[i];
    if (proposals < 5) {
      return '< 5';
    }
    if (proposals < 10) {
      return '5-10';
    }
    if (proposals < 20) {
      return '10-20';
    }
    return '20-50';
  }

  filter(value: string) {
    this.searchValue = value;
    if (value.trim().length === 0) {
      this.setApplications$(this.applicationService.getApplications());
    } else {
      this.setApplications$(this.applicationService.filterApplications(value));
    }
  }
}
