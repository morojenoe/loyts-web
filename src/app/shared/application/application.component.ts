import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { differenceInMinutes } from 'date-fns';

import { PlayerComponent } from '../player/player.component';
import { Application } from '../../models/application';
import { PlayerState } from '../player/player-state';
import { Proposal } from '../../models/proposal';

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
  @Input() proposal: Proposal;
  @Output() changePlayer = new EventEmitter<PlayerState>();
  isProposalDialogOpen = false;

  constructor() { }

  ngOnInit() {
  }

  openProposalDialog() {
    this.isProposalDialogOpen = true;
  }

  closeProposalDialog() {
    this.isProposalDialogOpen = false;
  }

  createdProposal(proposal: Proposal) {
    this.proposal = proposal;
  }

  changePlayerState(playerState: PlayerState) {
    this.playerState = playerState;
    this.changePlayer.emit(playerState);
  }

  elapsedTime(): string {
    const time = differenceInMinutes(new Date(Date.now()), this.application.time);
    if (time < 45) {
      return `${time} m`;
    }
    if (time < 75) {
      return `1 h`;
    }
    if (time < 105) {
      return '1.5 h';
    }
    return '2 h';
  }

  numberOfProposals(proposalsCount): string {
    if (proposalsCount < 5) {
      return '< 5';
    }
    if (proposalsCount < 10) {
      return '5-10';
    }
    if (proposalsCount < 20) {
      return '10-20';
    }
    return '20-50';
  }

  stopPlaying(): void {
    this.playerComponent.stop();
  }
}
