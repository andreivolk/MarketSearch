import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, Router } from '@angular/router';
import { Headers, Http, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import { MarketapiService } from '../../services/marketapi.service';
import { ZipCheckService } from '../../services/zip-check.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router, private http: Http, private api: MarketapiService, private zipCheck: ZipCheckService) { }

  public zipCode: string;
  public validZip: boolean = true;
  public apiJSON: any;

  marketSearch() {
    this.validZip = this.zipCheck.checkZip(this.zipCode);
    if (this.validZip) {
      this.router.navigate(['/results', this.zipCode]);
    }
  }

  ngOnInit() {
  }

}
