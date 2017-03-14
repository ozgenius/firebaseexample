import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import {FirebaseService} from "./services/firebase.service";

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyCL-94qPhpSQYFLNR0lFbl5sG3tHtDg50A',
  authDomain: 'blog-f406b.firebaseapp.com',
  databaseURL: 'https://blog-f406b.firebaseio.com',
  storageBucket: 'blog-f406b.appspot.com',
  messagingSenderId: '1077197706269'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
