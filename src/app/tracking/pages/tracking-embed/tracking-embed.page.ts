import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'ons-page[tracking_embed]',
  templateUrl: 'tracking-embed.page.html'
})

export class TrackingEmbedPage implements OnInit {
  constructor(
    private location: Location
  ) { }

  ngOnInit() { }

  public onGoBack() {
    this.location.back();
    // this.router
  }
}