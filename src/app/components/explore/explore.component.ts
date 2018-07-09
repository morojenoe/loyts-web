import { Component, OnInit, Inject, QueryList, ViewChildren } from '@angular/core';
import { IApplicationService } from '../../interfaces/i-application-service';
import { ApplicationService } from '../../services/application.service';
import { Application } from '../../models/application';
import { Proposal } from '../../models/proposal';
import { Observable } from 'rxjs';
import { ApplicationComponent } from '../../shared/application/application.component';
import { PlayerState } from '../../shared/player/player-state';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  @ViewChildren(ApplicationComponent) applicationComponents: QueryList<ApplicationComponent>;
  applications$: Observable<Application[]>;
  proposals: Proposal[];
  searchValue: string;
  playingApplicationId: number;

  constructor(@Inject(ApplicationService) private applicationService: IApplicationService) { }

  ngOnInit() {
    this.setApplications$(this.applicationService.getApplications());
    this.applicationService.getProposals().subscribe(
      proposals => this.proposals = proposals
    );
  }

  isAlreadyApplied(applicationId: number): boolean {
    return this.proposals.findIndex(proposal => proposal.applicationId === applicationId) !== -1;
  }

  setApplications$(applicationsObservable: Observable<Application[]>): void {
    this.applications$ = applicationsObservable;
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

  filter(value: string): void {
    this.searchValue = value;
    if (value.trim().length === 0) {
      this.setApplications$(this.applicationService.getApplications());
    } else {
      this.setApplications$(this.applicationService.filterApplications(value));
    }
  }

  changePlayerState(appId: number, playerState: PlayerState): void {
    if (this.playingApplicationId !== undefined && this.playingApplicationId !== appId) {
      const appComponent = this.applicationComponents.find(
        app => app.application.id === this.playingApplicationId);
      this.playingApplicationId = undefined;
      if (appComponent !== undefined) {
        appComponent.stopPlaying();
      }
    }
    if (playerState === PlayerState.Playing) {
      this.playingApplicationId = appId;
    } else {
      this.playingApplicationId = undefined;
    }
  }
}
