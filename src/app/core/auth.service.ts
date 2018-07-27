import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: auth.UserCredential;

  constructor(public afAuth: AngularFireAuth, private router:Router) { }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.EmailAuthProvider())
      .then(user => this.user = user)
      .catch(error => console.log(error));
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
