import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import { auth, FirebaseError } from 'firebase';
import { Observable, from } from 'rxjs';

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

  isLoggedIn(): boolean {
    console.log(this.user);
    return Boolean(this.user);
  }

  signUpWithEmail(email: string, password: string): Observable<FirebaseError> {
    return from<FirebaseError>(
      this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
        user => {
          this.user = user;
          console.log(this.user);
          return null;
        }
      ).catch(
        error => error
      )
    );
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
