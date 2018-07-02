import { Component, OnInit, Inject } from '@angular/core';
import { IApplicationService } from '../../interfaces/i-application-service';
import { ApplicationService } from '../../services/application.service';
import { Application } from '../../models/application';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  applications$: Observable<Application[]> = null;
  searchValue: string;

  constructor(@Inject(ApplicationService) private applicationService: IApplicationService) { }

  ngOnInit() {
    this.applications$ = this.applicationService.getApplications();
  }

  filter(value: string) {
    this.searchValue = value;
    if (value.trim().length === 0) {
      this.applications$ = this.applicationService.getApplications();
    } else {
      this.applications$ = this.applicationService.filterApplications(value);
    }
  }
}
