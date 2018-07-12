import { Component, OnInit, Inject, QueryList, ViewChildren } from '@angular/core';
import { IApplicationService } from '../../interfaces/i-application-service';
import { ApplicationService } from '../../services/application.service';
import { Application } from '../../models/application';
import { Proposal } from '../../models/proposal';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, startWith } from 'rxjs/operators';
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
  searchTerms = new Subject<string>();
  proposals: Proposal[];
  playingApplicationId: number;
  creatingProposalForAppId: number;
  proposalMessage: any;

  constructor(@Inject(ApplicationService) private applicationService: IApplicationService) { }

  ngOnInit() {
    this.applications$ = this.searchTerms.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.applicationService.filterApplications(term)),
    );
    this.applicationService.getProposals().subscribe(
      proposals => this.proposals = proposals
    );
  }

  isAlreadyApplied(applicationId: number): boolean {
    return this.proposals.findIndex(proposal => proposal.applicationId === applicationId) !== -1;
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
    this.searchTerms.next(value);
  }

  initVoiceRecording(applicationId: number) {
    if (this.creatingProposalForAppId && this.creatingProposalForAppId === applicationId) {
      this.creatingProposalForAppId = undefined;
    } else {
      this.creatingProposalForAppId = applicationId;
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

  setRecordedProposal(voice: any) {
    this.proposalMessage = voice;
  }

  discardProposal() {
    this.proposalMessage = undefined;
    this.creatingProposalForAppId = undefined;
  }

  submitProposal(applicationId: number) {
    const proposal: Proposal = {
      id: -1,
      applicationId: applicationId,
      audio: this.proposalMessage,
    };
    this.applicationService.addProposal(proposal).subscribe(
      () => this.discardProposal()
    );
  }
}
