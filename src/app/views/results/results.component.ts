import { Component, OnInit } from '@angular/core';
import { Market } from '../market/market';
import { MarketapiService } from '../../services/marketapi.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  providers: [MarketapiService]
})
export class ResultsComponent implements OnInit {

  constructor(private api: MarketapiService, private route: ActivatedRoute, private router: Router) {

   }

  public markets: any;
  public zipCode: number;
  public resultsCount: number;

  ngOnInit() {
    this.route.params.subscribe( params =>
        this.zipCode = params['zip']);

    this.route.params
    .switchMap((params: Params) => this.api.getMarkets(+params['zip']))
    .subscribe((markets => this.markets = markets));
  }

}
