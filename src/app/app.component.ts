import { Component } from '@angular/core';

class Navigation {
  title: string;
  routerLink: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly components: Navigation[] = [
    { title: 'Explore', routerLink: '/explore' },
    { title: 'Application', routerLink: '/application' },
    { title: 'Chat Room', routerLink: '/chat-room' },
  ];
  constructor() { }
}
