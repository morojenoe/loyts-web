import { TestBed, inject } from '@angular/core/testing';

import { VoiceRecorderService } from './voice-recorder.service';

describe('VoiceRecorderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoiceRecorderService]
    });
  });

  it('should be created', inject([VoiceRecorderService], (service: VoiceRecorderService) => {
    expect(service).toBeTruthy();
  }));
});
