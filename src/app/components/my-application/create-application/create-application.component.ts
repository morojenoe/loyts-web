import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

import { ApplicationService } from '../../../services/application.service';
import { IApplicationService } from '../../../interfaces/i-application-service';
import { Application } from '../../../models/application';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.scss']
})
export class CreateApplicationComponent implements OnInit {
  application: Application;
  constructor(@Inject(ApplicationService) private appService: IApplicationService,
              private router: Router) {
    this.application = new Application();
  }

  ngOnInit() {
    this.appService.getMyApplication().subscribe(
      application => {
        if (application) {
          this.router.navigate(['/application']);
        }
      }
    );
  }

  changeLanguage(language: string) {
    this.application.language = language;
  }

  tagsChanged(tags: Array<string>) {
    this.application.tags = tags;
  }

  recordedVoice(audio: any) {
    this.application.audio = audio;
  }

  selectionChange(event: StepperSelectionEvent) {
    if (event.selectedIndex === 3) {
      this.application.time = new Date(Date.now());
    }
  }

  publish() {
    this.application.time = new Date(Date.now());
    this.appService.addApplication(this.application).subscribe(
      application => {
        this.router.navigate(['/application']);
      }
    );
  }
}
