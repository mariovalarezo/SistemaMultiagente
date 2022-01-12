import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { UnityComponent } from './unity/unity.component';

import { GaugesModule } from 'ng-canvas-gauges';


@NgModule({
  declarations: [
    AppComponent,
    UnityComponent
  ],
  imports: [
    BrowserModule,GaugesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
