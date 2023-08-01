import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  User,
  authState,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User | null = null;

  constructor(public auth: Auth) {
    authState(auth).subscribe((user) => {
      console.log(user);
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }

  login() {
    let googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, googleAuthProvider);
  }

  logout() {
    return signOut(this.auth);
  }
}
