import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';


import {MaterialExampleModule} from '../material.module';
import {TabNavBar} from './tab-nav/tab-nav.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { GamesComponent } from './games/games.component';
import { HardwareComponent } from './hardware/hardware.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeComponent } from './home/home.component';
import { TrackingService } from 'src/trackingService';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


const appRoutes: Routes = [
{ path: 'about', component: AboutComponent},
{ path: 'games', component: GamesComponent},
{ path: 'hardware', component: HardwareComponent},
{ path: 'home', component: HomeComponent}
]

@NgModule({
  declarations: [TabNavBar, AboutComponent, GamesComponent, HardwareComponent, HomeComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    MatTabsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TrackingService],
  bootstrap: [TabNavBar],
})
export class AppModule {}
