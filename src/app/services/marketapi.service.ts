import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Market } from '../views/market/market';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class MarketapiService {

  constructor(private http: Http) { }

  private response: any;

  public getMarkets(zip): Promise<Market[]> {
    var apiUrl = 'http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=' + zip;
    return this.http.get(apiUrl).toPromise()
      .then(this.extractData);
  }
  /*Endpoint returns jsonp and there is some weirdness in resolving it*/
  public extractData(res: Response) {
    return res.json();
  }
  public getMarketDetail(FMID) {
    return this.http.get(environment.dbAPI + 'market/' + FMID)
      .map(result => result.json());
  }
  public checkZip(zip) {
    return this.http.get(environment.dbAPI + 'zip/' + zip)
      .map(result => result.json());
  }
}
