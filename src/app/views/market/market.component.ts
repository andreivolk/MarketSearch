import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute, Router, Params } from '@angular/router';
import { environment } from '../../../environments/environment';
import { MarketapiService } from '../../services/marketapi.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private api: MarketapiService) { }

  public market: any;
  public FMID: number;

  ngOnInit() {
  this.route.params.subscribe( params =>
        this.FMID = params['id']);
    this.api.getMarketDetail(+this.FMID)
    .subscribe((market => this.market = market));
  }

}
