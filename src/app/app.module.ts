import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CostumersListComponent } from './costumers-list/costumers-list.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    CostumersListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
