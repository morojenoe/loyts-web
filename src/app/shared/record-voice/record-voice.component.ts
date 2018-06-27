import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

enum Recording {
  NotStarted = 0,
  Started = 1,
  Finished = 2,
}

@Component({
  selector: 'app-record-voice',
  templateUrl: './record-voice.component.html',
  styleUrls: ['./record-voice.component.scss']
})
export class RecordVoiceComponent implements OnInit {
  RecordingEnum = Recording;

  @Input() maxDuration = 30;
  @Output() recordedVoice = new EventEmitter<any>();
  time: Number = null;
  state = Recording.NotStarted;
  recordingTimer = timer(0, 1000).pipe(take(this.maxDuration + 1));

  ngOnInit() {
  }

  startRecording() {
    this.state = Recording.Started;
    this.recordingTimer.subscribe(
      value => this.time = value,
      err => {},
      () => this.finishRecording()
    );
  }

  finishRecording() {
    this.state = Recording.Finished;
    this.recordedVoice.emit('asd');
  }
}
