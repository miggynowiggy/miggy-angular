import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { WorksPageComponent } from './works-page/works-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ViewWorkPageComponent } from './view-work-page/view-work-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SkillsPageComponent,
    WorksPageComponent,
    MainPageComponent,
    ViewWorkPageComponent,
    PageNotFoundComponent,
    NavBarComponent,
    AboutPageComponent,
    ContactsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    NgbModule

  ],
  providers: [
    { provide: BUCKET, useValue: environment.firebase.storageBucket }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
