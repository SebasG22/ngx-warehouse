import { State, Action, StateContext } from '@ngxs/store';
import { Login } from '../actions/auth.actions';
import { AuthService } from '../services/auth.service';
import { map, catchError } from 'rxjs/operators';
import * as ons from 'onsenui';

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
  login({ patchState }: StateContext<AuthStateModel>, { payload }: Login) {
    this.authService.loginUser(payload).then((data) => {
      patchState({ email: payload.email, password: payload.password })
      ons.notification.alert({
        title: 'Success',
        messageHTML: 'Se ha logueado correctamente',
      });
    }).catch(error => {
      ons.notification.alert({
        title: 'Error',
        messageHTML: 'El correo y/o contraseña que proporcionaste no concuerda con ninguna cuenta asociada',
      });
    })
  }

}
