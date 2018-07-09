import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { getNames, registerLocale } from '@cospired/i18n-iso-languages';


class Language {
  code: string;
  name: string;
}

@Component({
  selector: 'app-input-language',
  templateUrl: './input-language.component.html',
  styleUrls: ['./input-language.component.scss']
})
export class InputLanguageComponent implements OnInit {
  langs: Array<Language>;
  @Output() changeLanguage = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    registerLocale(require('@cospired/i18n-iso-languages/langs/en.json'));
    const languages = getNames('en');
    this.langs = Object.keys(languages).map(lang => ({
      code: lang,
      name: languages[lang]
    }));
  }

  selectionChanged(event: MatSelectChange) {
    this.changeLanguage.emit(event.value.toLowerCase());
  }
}
