import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AirWidgetMainComponent } from './Components/air-widget-main/air-widget-main.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AirWidgetMainComponent
  ],
  imports: [
    BrowserModule,
     // import HttpClientModule after BrowserModule.
     HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
