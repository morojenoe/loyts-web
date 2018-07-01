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

  constructor(@Inject(ApplicationService) private applicationService: IApplicationService) { }

  ngOnInit() {
    this.applications$ = this.applicationService.getApplications();
  }
}
