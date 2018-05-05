import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginEmail } from '../models/auth.model';



@Injectable()
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  public loginUser(payload: LoginEmail): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword
      (payload.email, payload.password)
  }
}