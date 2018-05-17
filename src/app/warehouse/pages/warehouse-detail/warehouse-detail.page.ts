import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { filter, pairwise } from 'rxjs/operators';

@Component({
  selector: 'ons-page[warehouse_detail]',
  templateUrl: 'warehouse-detail.page.html',
  styleUrls: ['warehouse-detail.page.scss']
})

export class WarehouseDetailPage implements OnInit {

  constructor(
    private router: Router,
    private location: Location) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      pairwise()
    ).subscribe((e) => {
      console.log('NAVIGATION PREVIOUS => ', e);
    });
  }

  public onEditItem() {
    this.router.navigate(['warehouse/item-form']);
  }

  public goBack() {
    this.location.back();
    this.router
  }
}