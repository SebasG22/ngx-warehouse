import { Component, OnInit } from '@angular/core';
import { AuthMainPage } from '../../../auth/pages/main/auth-main.page';
import { Tab1Page } from '../tab1/tab1.page';
import { Tab2Page } from '../tab2/tab2.page';

@Component({
  selector: 'ons-page[home]',
  templateUrl: 'home-main.page.html'
})

export class HomeMainPage implements OnInit {

  constructor() { }

  sidePage = Tab1Page;
  contentPage = Tab2Page;

  ngOnInit() { }
}