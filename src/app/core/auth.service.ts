import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import { auth, FirebaseError } from 'firebase';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: firebase.User;

  constructor(public afAuth: AngularFireAuth, private router:Router) {
    this.afAuth.user.subscribe(user => this.user = user);
  }

  signInWithEmail(email: string, password: string): Observable<FirebaseError> {
    return from<FirebaseError>(
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(() => null)
        .catch(error => error)
    );
  }

  isLoggedIn(): boolean {
    return Boolean(this.user);
  }

  signUpWithEmail(email: string, password: string): Observable<FirebaseError> {
    return from<FirebaseError>(
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(() => null)
        .catch(error => error)
    );
  }

  signOut() {
    this.afAuth.auth.signOut();
  }
}
