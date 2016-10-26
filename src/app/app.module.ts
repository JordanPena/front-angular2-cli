import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PolymerElement } from '@vaadin/angular2-polymer';

import { AppComponent } from './app.component';
import { SobreComponent } from './sobre/sobre.component';
import { FeedComponent } from './feed/feed.component';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    FeedComponent,
    PolymerElement('paper-card'),
    PolymerElement('app-header'),
    PolymerElement('paper-button'),
    PolymerElement('app-header-layout'),
    PolymerElement('paper-icon-button'),
    PolymerElement('paper-icon-item'),
    PolymerElement('app-drawer-layout'),
    PolymerElement('app-drawer'),
    PolymerElement('paper-item'),
    PolymerElement('paper-menu'),
    PolymerElement('app-box'),
     PolymerElement('iron-pages'),
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
