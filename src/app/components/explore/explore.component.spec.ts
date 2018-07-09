import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

import { of } from 'rxjs';

import { ExploreComponent } from './explore.component';
import { Application } from '../../models/application';
import { ApplicationService } from '../../services/application.service';


@Component({selector: 'app-application', template: ''})
class ApplicationStubComponent {
  @Input() application: Application;
}

@Component({selector: 'app-record-voice', template: ''})
class RecordVoiceStubComponent { }




describe('ExploreComponent', () => {
  let component: ExploreComponent;
  let fixture: ComponentFixture<ExploreComponent>;

  beforeEach(async(() => {
    const applicationServiceStub = jasmine.createSpyObj(
      'applicationService',
      [
        'getApplications',
        'filterApplications',
        'getCountApplicationProposals'
      ]
    );
    applicationServiceStub.getApplications.and.returnValue(of([]));
    TestBed.configureTestingModule({
      declarations: [
        ExploreComponent,
        ApplicationStubComponent,
        RecordVoiceStubComponent,
      ],
      imports: [
        MatFormFieldModule,
        MatIconModule,
        MatDividerModule,
        MatChipsModule,
        MatCardModule,
      ],
      providers: [
        {provide: ApplicationService, useValue: applicationServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
