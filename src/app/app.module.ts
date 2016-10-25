import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PolymerElement } from '@vaadin/angular2-polymer';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PolymerElement('app-header'),
    PolymerElement('app-header-layout'),
    PolymerElement('paper-icon-button'),
    PolymerElement('paper-icon-item'),
    PolymerElement('app-drawer-layout'),
    PolymerElement('app-drawer'),
    PolymerElement('paper-item'),
    PolymerElement('paper-menu'),
    PolymerElement('app-toolbar')
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
