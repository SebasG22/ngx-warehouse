import { LoginEmail } from "../models/auth.model";

export class Login {
  static readonly type = '[ auth ] login user';
  constructor(public payload: {
    email: string;
    password: string;
  }) { }
}

export class LoginSuccess {
  static readonly type = '[ auth ] login user';
  constructor(public payload: LoginEmail) { }
}