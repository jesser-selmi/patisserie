import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TousdetailsComponent } from './tousdetails/tousdetails.component';
import { CheesecakesComponent } from './cheesecakes/cheesecakes.component';
import { CakeShopComponent } from './cake-shop/cake-shop.component';
import { CheesecakeListComponent } from './cheesecake-list/cheesecake-list.component';
import { PieListComponent } from './pie-list/pie-list.component';
import { AllListComponent } from './all-list/all-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TousdetailsComponent,
    CheesecakesComponent,
    CakeShopComponent,
    CheesecakeListComponent,
    PieListComponent,
    AllListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
