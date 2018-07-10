import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputTagsComponent } from './input-tags.component';

describe('InputTagsComponent', () => {
  let component: InputTagsComponent;
  let fixture: ComponentFixture<InputTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTagsComponent ],
      imports: [
        MatChipsModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        BrowserAnimationsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
