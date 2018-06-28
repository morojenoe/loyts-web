import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { timer, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

enum Recording {
  NotStarted,
  Started,
  Finished,
  Playing,
}

@Component({
  selector: 'app-record-voice',
  templateUrl: './record-voice.component.html',
  styleUrls: ['./record-voice.component.scss']
})
export class RecordVoiceComponent implements OnInit {
  State = Recording;

  @Input() maxDuration = 30;
  @Output() recordedVoice = new EventEmitter<any>();
  time: Number = null;
  state = Recording.NotStarted;
  recordingTimer: Subscription;

  ngOnInit() {
  }

  startRecording() {
    this.recordedVoice.emit(null);
    this.state = Recording.Started;
    const recordingTimer = timer(0, 1000).pipe(take(this.maxDuration + 1));
    this.recordingTimer = recordingTimer.subscribe(
      value => this.time = value,
      err => {},
      () => this.finishRecording()
    );
  }

  finishRecording() {
    this.state = Recording.Finished;
    this.recordingTimer.unsubscribe();
    this.recordedVoice.emit('asd');
  }

  playApplication() {
    this.state = Recording.Playing;
  }

  stopPlayingApplication() {
    this.state = Recording.Finished;
  }
}
