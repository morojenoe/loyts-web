import { Component, OnInit } from '@angular/core';
import { LocalizedCountryNames, langs, getNames, registerLocale } from '@cospired/i18n-iso-languages';

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
  constructor() { }

  ngOnInit() {
    registerLocale(require('@cospired/i18n-iso-languages/langs/en.json'));
    const languages = getNames('en');
    this.langs = Object.keys(languages).map(lang => ({
      code: lang,
      name: languages[lang]
    }));
  }
}
