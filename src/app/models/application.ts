export class Application {
  id: number;
  tags: Array<string>;
  language: string;
  time: Date;
  audio: any;

  constructor(id: number = null,
              language: string = null,
              tags: Array<string> = null,
              time: Date = null,
              audio: any = null) {
    this.id = id;
    this.language = language;
    this.tags = tags;
    this.time = time;
    this.audio = audio;
  }
}
