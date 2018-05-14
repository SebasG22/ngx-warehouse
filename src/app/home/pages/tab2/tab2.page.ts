import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { SharedState } from '../../../shared/states/shared.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'ons-page',
  templateUrl: 'tab2.page.html'
})

export class Tab2Page implements OnInit {

  @Select(SharedState) sharedState$: Observable<any>;

  public title = 'Bodega';

  constructor() { }

  ngOnInit() { }


}