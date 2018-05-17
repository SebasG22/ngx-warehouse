import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-warehouse-detail',
  templateUrl: 'warehouse-detail.component.html',
  styleUrls: ['warehouse-detail.component.scss']
})

export class WareHouseDetailComponent implements OnInit {

  @ViewChild('segment') _segment: any;

  constructor() { }

  ngOnInit() { }
}