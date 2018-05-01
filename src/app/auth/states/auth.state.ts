import { State, Action, StateContext } from '@ngxs/store';
import { Login } from '../actions/auth.actions';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators/map';

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
    await this.authService.loginUser(payload)
      .pipe(
        map((data) => {
          console.log('data', data);
          if (data) {

          }
        })
      )
    patchState({ email: payload.email })
  }

}
