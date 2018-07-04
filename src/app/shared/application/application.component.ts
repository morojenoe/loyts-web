import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { formatDistanceStrict } from 'date-fns';

import { PlayerComponent } from '../player/player.component';
import { Application } from '../../models/application';
import { PlayerState } from '../player/player-state';


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  PlayerState = PlayerState;
  playerState = PlayerState.NotStarted;
  @ViewChild(PlayerComponent) playerComponent;
  @Input() application: Application;
  @Output() changePlayer = new EventEmitter<PlayerState>();

  constructor() { }

  ngOnInit() {
  }

  changePlayerState(playerState: PlayerState) {
    this.playerState = playerState;
    this.changePlayer.emit(playerState);
  }

  elapsedTime(): string {
    const time = formatDistanceStrict(this.application.time, new Date(Date.now()));
    if (time.search('second') !== -1) {
      return '1 minute';
    }
    return time;
  }

  stopPlaying(): void {
    this.playerComponent.stop();
  }
}
