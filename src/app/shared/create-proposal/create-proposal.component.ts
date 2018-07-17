import { Component, OnInit, Input, Output, Inject, EventEmitter } from '@angular/core';

import { IApplicationService } from '../../interfaces/i-application-service';
import { ApplicationService } from '../../services/application.service';
import { Proposal } from '../../models/proposal';

@Component({
  selector: 'app-create-proposal',
  templateUrl: './create-proposal.component.html',
  styleUrls: ['./create-proposal.component.scss']
})
export class CreateProposalComponent implements OnInit {
  proposalMessage: any;
  @Input() applicationId: number;
  @Output() close = new EventEmitter<Proposal>();

  constructor(@Inject(ApplicationService) private applicationService: IApplicationService) { }

  ngOnInit() {
  }

  setRecordedProposal(voice: any) {
    this.proposalMessage = voice;
  }

  discardProposal() {
    this.proposalMessage = undefined;
    this.close.emit(null);
  }

  submitProposal() {
    const proposal: Proposal = {
      id: Math.floor(Math.random() * 1000),
      applicationId: this.applicationId,
      audio: this.proposalMessage,
    };
    this.applicationService.addProposal(proposal).subscribe(
      prop => {
        console.log(prop);
        this.proposalMessage = undefined;
        this.close.emit(prop);
      }
    );
  }
}
