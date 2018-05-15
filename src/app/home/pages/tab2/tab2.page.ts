import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { SharedState } from '../../../shared/states/shared.state';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'ons-page',
  templateUrl: 'tab2.page.html'
})

export class Tab2Page implements OnInit {

  @Select(SharedState) sharedState$: Observable<any>;

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  public onGoTo(indexTab: number) {
    switch (indexTab) {
      case 0:
        this.router.navigate(['/warehouse/item-form']);
        return;
    }
  }

}