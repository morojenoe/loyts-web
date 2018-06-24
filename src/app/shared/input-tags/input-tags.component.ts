import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-input-tags',
  templateUrl: './input-tags.component.html',
  styleUrls: ['./input-tags.component.scss']
})
export class InputTagsComponent implements OnInit {
  readonly maxTagLength = 50;
  readonly maxTagCount = 5;
  @Input() tags: Array<string> = [];
  @Output() tagsChanged = new EventEmitter<Array<string>>();
  separatorKeysCodes = [ENTER, COMMA];

  constructor() { }

  ngOnInit() {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.tags.push(value.trim().toLowerCase());
      this.tagsChanged.emit(this.tags);
    }

    if (input) {
      input.value = '';
    }
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
      this.tagsChanged.emit(this.tags);
    }
  }
}
