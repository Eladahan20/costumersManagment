import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CostumersListComponent } from './costumers-list/costumers-list.component';
import { CostumerComponent } from './costumer/costumer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MapComponent } from './map/map.component';
import { AddCostumerComponent } from './add-costumer/add-costumer.component';

const appRoutes: Routes = [
  { path: 'costumers',      component: CostumersListComponent },
  { path: 'control',      component: MapComponent },
  { path: 'addCostumer',      component: AddCostumerComponent },
  
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CostumersListComponent,
    CostumerComponent,
    NavbarComponent,
    MapComponent,
    AddCostumerComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDJpsRpVcWAQjhXa3kIbvRqZajvZ_K7L_s'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
