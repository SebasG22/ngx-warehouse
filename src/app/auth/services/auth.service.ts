import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginEmail } from '../models/auth.model';


@Injectable()
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  public loginUser(payload: LoginEmail): Observable<any> {
    return Observable.fromPromise(
      this.afAuth.auth.signInWithEmailAndPassword
        (payload.email, payload.password)
    );
  }
}