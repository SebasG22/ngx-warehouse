import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {

  constructor() { }

  public loginUser(): Observable<any> {
    return Observable.of({});
  }
}