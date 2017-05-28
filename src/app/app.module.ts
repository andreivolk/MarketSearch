import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './views/navigation/navigation.component';
import { FooterComponent } from './views//footer/footer.component';
import { SearchComponent } from './views//search/search.component';
import { ResultsComponent } from './views//results/results.component';
import { MarketComponent } from './views//market/market.component';
import { AboutComponent } from './views/about/about.component';

import { MarketapiService } from './services/marketapi.service';
import { ZipCheckService } from './services/zip-check.service';
import { DistancePipe } from './pipes/distance.pipe';
import { SeasonTimePipe } from './pipes/seasontime.pipe';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NguiUtilsModule } from '@ngui/utils';
import { NguiMapModule } from '@ngui/map';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'results/:zip', component: ResultsComponent },
  { path: 'market/:id', component: MarketComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo:  '/search', pathMatch: 'full' },
  { path: '**', component: SearchComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    MarketComponent,
    SearchComponent,
    NavigationComponent,
    DistancePipe,
    SeasonTimePipe,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NguiMapModule.forRoot({
      apiUrl: 'https://maps.googleapis.com/maps/api/js?key=' + environment.googleKey}),
      NguiUtilsModule
  ],
  providers: [MarketapiService, ZipCheckService,
  { provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
