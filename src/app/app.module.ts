import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { PolymerElement } from '@vaadin/angular2-polymer';
import { ShareButtonsModule } from "ng2-sharebuttons";
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { Routers } from './app.routes';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { SobreComponent } from './sobre/sobre.component';
import { FeedComponent } from './feed/feed.component';
import { QuizComponent } from './quiz/quiz.component';
import { CadastreComponent } from './cadastre/cadastre.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ResultadoComponent } from './resultado/resultado.component';

export const firebaseConfig = {
  apiKey: "AIzaSyA-N5Rddn8zMhMvRnCy3-KTmKZZ6jNgj2s",
  authDomain: "soulsolidario-7c47b.firebaseapp.com",
  databaseURL: "https://soulsolidario-7c47b.firebaseio.com",
  storageBucket: "soulsolidario-7c47b.appspot.com"
}

export const firebaseAuthConfig = {
  provider: AuthProviders.Anonymous,
  method: AuthMethods.Anonymous,
}
@NgModule({
  declarations: [
  AppComponent,
  HomeComponent,
  SobreComponent,
  QuizComponent,
  CadastreComponent,
  PerfilComponent,
  FeedComponent,
  ResultadoComponent,
  PolymerElement('paper-card'),
  PolymerElement('paper-input'),
  PolymerElement('paper-dialog'),
  PolymerElement('paper-progress'),
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
  PolymerElement('iron-image'),
  PolymerElement('app-toolbar')
  ],
  imports: [
  BrowserModule,
  ShareButtonsModule,
  FormsModule,
  ReactiveFormsModule,
  Routers,
  HttpModule,
  AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
