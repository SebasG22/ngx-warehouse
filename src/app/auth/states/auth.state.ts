import { State, Action, StateContext } from '@ngxs/store';
import { Login } from '../actions/auth.actions';

export interface AuthStateModel {
  email: string;
  password: string;
}

@State<AuthStateModel>(
  {
    name: 'auth',
    defaults: {
      email: null,
      password: null
    }

  }
)
export class AuthState {

  constructor(private authService: AuthService) { }

  @Action(Login)
  async login({ patchState }: StateContext<AuthStateModel>, { payload }: Login) {
    await
      patchState({ email: payload.email })
  }

}
