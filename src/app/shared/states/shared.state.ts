import { State, Action, StateContext } from '@ngxs/store';
import { SetTab } from '../actions/shared.actions';

export interface SharedStateModel {
  currentTab: number;
  name: string;
}

@State<SharedStateModel>(
  {
    name: 'shared',
    defaults: {
      currentTab: 0,
      name: 'Bodega'
    }

  }
)
export class SharedState {

  constructor() { }

  @Action(SetTab)
  setTab({ patchState }: StateContext<SharedStateModel>, { payload }: any) {
    console.log('Set current tab', payload);
    patchState({ currentTab: payload, name: this.getTabName(payload) });
  }

  private getTabName(currentTab): string {
    switch (currentTab) {
      case 0:
        return 'Bodega';
      case 1:
        return 'Clientes';
      default:
        return 'Not Found';
    }
  }

}
