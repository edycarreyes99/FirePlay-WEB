import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

// se realizan las importaciones de firebase
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';

// se realiza la importacion del modulo de todos los componentes de material design
import {MaterialModule} from './modules/material/material.module';

// se realiza la importacion del componente de enviroments
import {environment} from '../environments/environment';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from './pages/home/home.component';
import {MovieCardComponent} from './components/movie-card/movie-card.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MovieCardComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    // importaciones de firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,

    // importacion del modulo de material design
    MaterialModule
  ],
  providers: [
    NavbarComponent,
    SidenavComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
