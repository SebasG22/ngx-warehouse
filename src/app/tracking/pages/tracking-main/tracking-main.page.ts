import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ons-page[tracking_main]',
  templateUrl: 'tracking-main.page.html'
})

export class TrackingMainPage implements OnInit {
  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  public onGoToTrackingEmbed(company) {
    this.router.navigate(['/tracking/embed'], { queryParams: { company: company } });
  }
}