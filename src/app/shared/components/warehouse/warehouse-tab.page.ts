import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ons-page[warehouse_tab]',
  templateUrl: 'warehouse-tab.page.html'
})

export class WareHouseTabPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  onGoToItemDetails() {
    this.router.navigate(['/warehouse/item-detail']);
  }
}