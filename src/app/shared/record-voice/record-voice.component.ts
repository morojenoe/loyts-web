import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { timer, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import { VoiceRecorderService } from '../../services/voice-recorder.service';

enum RecordingState {
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
  State = RecordingState;

  @Input() maxDuration = 30;
  @Output() recordedVoice = new EventEmitter<any>();
  state = this.State.NotStarted;
  timer: Subscription;
  time: Number = null;

  constructor(private voiceRecorderService: VoiceRecorderService) { }

  ngOnInit() {
  }

  subscribeToTimer() {
    this.timer = timer(0, 1000).pipe(take(this.maxDuration + 1)).subscribe(
      value => this.time = value,
      err => {},
      () => this.finishRecording()
    );
  }

  startRecording() {
    this.voiceRecorderService.start().subscribe(
      start => {
        if (start) {
          this.state = this.State.Started;
          this.recordedVoice.emit(undefined);
          this.subscribeToTimer();
        }
      }
    );
  }

  finishRecording() {
    this.voiceRecorderService.stop().subscribe(
      audio => {
        this.state = this.State.Finished;
        this.timer.unsubscribe();
        this.recordedVoice.emit(audio);
      }
    );
  }

  playApplication() {
    this.state = this.State.Playing;
    this.subscribeToTimer();
  }

  stopPlayingApplication() {
    this.state = this.State.Finished;
    this.timer.unsubscribe();
  }
}
