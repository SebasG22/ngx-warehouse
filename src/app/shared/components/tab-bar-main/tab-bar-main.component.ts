import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Tab5Page } from '../tab5/tab5.page';
import { WareHouseTabPage } from '../warehouse/warehouse-tab.page';
import { Store } from '@ngxs/store';
import { SetTab } from '../../actions/shared.actions';

@Component({
  selector: 'app-tab-bar-main',
  templateUrl: 'tab-bar-main.component.html'
})

export class TabBarMainComponent implements OnInit {

  @Output('test')
  currentTab: EventEmitter<number>;


  constructor(
    private store: Store
  ) { }

  public tab1 = WareHouseTabPage;
  public tab2 = Tab5Page;

  ngOnInit() {
    setTimeout(() => {
      let notif = document.createElement('span');
      notif.className = "notification";
      notif.innerText = '100';
      document.getElementsByClassName("tabbar__icon")[3].appendChild(notif)
    }, 1000)
  }

  public changeTab(event) {
    //this.currentTab.emit(event.activeIndex);
    this.store.dispatch(new SetTab(event.activeIndex));
  }
}