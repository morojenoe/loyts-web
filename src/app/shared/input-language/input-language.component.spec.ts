import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLanguageComponent } from './input-language.component';

describe('InputLanguageComponent', () => {
  let component: InputLanguageComponent;
  let fixture: ComponentFixture<InputLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
