import { Component } from '@angular/core';

class Navigation {
  title: string;
  routerLink: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  components: Navigation[];
  constructor() {
    this.components = [
      { title: 'Explore', routerLink: '/explore' },
      { title: 'Application', routerLink: '/application' },
      { title: 'Chat Room', routerLink: '/chat-room' },
    ];
  }
}
