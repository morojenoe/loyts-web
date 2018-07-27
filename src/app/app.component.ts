import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/auth.service';

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
  constructor(private authService: AuthService, private router: Router) { }

  logout() {
    this.authService.signOut();
    this.router.navigate(['/login']);
  }
}
