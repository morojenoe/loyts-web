import { TestBed, inject } from '@angular/core/testing';

import { ApplicationService } from './application.service';
import { HttpClient } from '@angular/common/http';

describe('ApplicationService', () => {
  beforeEach(() => {
    const httpClientSpy = jasmine.createSpyObj('httpClientSpy', ['get']);
    TestBed.configureTestingModule({
      providers: [
        ApplicationService,
        { provide: HttpClient, useValue: httpClientSpy },
      ]
    });
  });

  it('should be created', inject([ApplicationService], (service: ApplicationService) => {
    expect(service).toBeTruthy();
  }));
});
