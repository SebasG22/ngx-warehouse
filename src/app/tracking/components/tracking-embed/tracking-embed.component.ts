import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tracking-embed',
  templateUrl: 'tracking-embed.component.html',
  styleUrls: ['tracking-embed.component.scss']
})

export class TrackingEmbed implements OnInit {

  public embedLink: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getCompanyTracker();
  }

  private getCompanyTracker() {
    this.route
      .queryParams
      .subscribe(params => {
        if (params) {
          this.setEmbedLink(params.company);
        }
      });
  }

  public setEmbedLink(company: string) {
    switch (company) {
      case 'servientrega':
        this.embedLink = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.servientrega.com/wps/portal/Colombia/transacciones-personas/rastreo-envios");
        break;
      case 'tcc':
        this.embedLink = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.tcc.com.co/logistica/servicios-on-line/rastrear-envios/");
    }
  }
}