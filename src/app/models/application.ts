export class Application {
  id: number;
  tags: Array<string>;
  language: string;
  time: Date;
  audio: any;
  countProposals: number;

  constructor(id: number = null,
              language: string = null,
              tags: Array<string> = null,
              time: Date = null,
              countProposals: number = null,
              audio: any = null) {
    this.id = id;
    this.language = language;
    this.tags = tags;
    this.time = time;
    this.countProposals = countProposals;
    this.audio = audio;
  }
}
