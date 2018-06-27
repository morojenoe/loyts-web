import { Component, OnInit } from '@angular/core';
import { Application } from '../../models/application';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.scss']
})
export class CreateApplicationComponent implements OnInit {
  application: Application;
  constructor() {
    this.application = new Application();
  }

  ngOnInit() {
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
}
