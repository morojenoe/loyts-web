import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { timer, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import { PlayerState } from './player-state';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  State = PlayerState;
  @Input() duration = 30;
  state = this.State.NotStarted;
  timer: Subscription;
  time: Number = null;

  @Output() changeState = new EventEmitter<PlayerState>();

  ngOnInit() {
    this.changeState.emit(this.state);
  }

  subscribeToTimer() {
    this.timer = timer(0, 1000).pipe(take(this.duration + 1)).subscribe(
      value => this.time = value,
      err => {},
      () => this.stop()
    );
  }

  play() {
    this.state = this.State.Playing;
    this.changeState.emit(this.state);
    this.subscribeToTimer();
  }

  stop() {
    this.state = this.State.NotStarted;
    this.changeState.emit(this.state);
    this.timer.unsubscribe();
  }
}
