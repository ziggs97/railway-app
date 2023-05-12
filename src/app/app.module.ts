import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { AppStoreModule } from 'src/store/AppStoreModule';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
  ...AppStoreModule,StoreDevtoolsModule.instrument({maxAge:25})],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, CallNumber],
  bootstrap: [AppComponent],
})
export class AppModule {}
