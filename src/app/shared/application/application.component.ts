import { Component, OnInit, Input } from '@angular/core';

import { formatDistanceStrict } from 'date-fns';

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
  @Input() application: Application;

  constructor() { }

  ngOnInit() {
  }

  changePlayerState(playerState: PlayerState) {
    this.playerState = playerState;
  }

  elapsedTime(): string {
    return formatDistanceStrict(this.application.time, new Date(Date.now()));
  }
}
