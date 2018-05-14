import { Component, OnInit } from '@angular/core';
import { Tab5Page } from '../tab5/tab5.page';
import { WareHouseTabPage } from '../warehouse/warehouse-tab.page';

@Component({
  selector: 'app-tab-bar-main',
  templateUrl: 'tab-bar-main.component.html'
})

export class TabBarMainComponent implements OnInit {
  constructor() { }

  public tab1 = WareHouseTabPage;
  public tab2 = Tab5Page;

  ngOnInit() {
    setTimeout(() => {
      let notif = document.createElement('span');
      notif.className = "notification";
      notif.innerText = '100';
      document.getElementsByClassName("tabbar__icon")[4].appendChild(notif)
    }, 1000)
  }
}