import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { ApplicationService } from '../../services/application.service';
import { IApplicationService } from '../../interfaces/i-application-service';
import { Application } from '../../models/application';

@Component({
  selector: 'app-my-application',
  templateUrl: './my-application.component.html',
  styleUrls: ['./my-application.component.scss']
})
export class MyApplicationComponent implements OnInit {
  application: Application;
  constructor(@Inject(ApplicationService) private appService: IApplicationService,
              private router: Router) { }

  ngOnInit() {
    this.appService.getMyApplication().subscribe(
      application => {
        if (!application) {
          this.router.navigate(['/application/create']);
        } else {
          this.application = application;
        }
      }
    );
  }

}
