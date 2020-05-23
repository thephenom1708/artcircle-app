import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
//import { EmailComposer } from '@ionic-native/email-composer';
//import { SMS } from '@ionic-native/sms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterPage } from '../pages/register/register';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { RegistrationPage } from '../pages/registration/registration';
import { EventsPage } from '../pages/events/events';
import { QrCodePage } from '../pages/qr-code/qr-code';
import { EntryListPage } from '../pages/entry-list/entry-list';
import { ViewEntriesPage } from '../pages/view-entries/view-entries';
import { LogoutPage } from '../pages/logout/logout';
import { EditEntryPage } from '../pages/edit-entry/edit-entry';


const firebaseAuth = {
  apiKey: "AIzaSyD-xdphLCgsZEKlIFTnxOUsO2_ij_upTJk",
  authDomain: "artcircle-1708.firebaseapp.com",
  databaseURL: "https://artcircle-1708.firebaseio.com",
  projectId: "artcircle-1708",
  storageBucket: "artcircle-1708.appspot.com",
  messagingSenderId: "743388583902"
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    DashboardPage,
    EventsPage,
    RegistrationPage,
    QrCodePage,
    EntryListPage,
    ListPage,
    ViewEntriesPage,
    EditEntryPage,
    LogoutPage
  ],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage, 
    DashboardPage,
    EventsPage,
    RegistrationPage,
    QrCodePage,
    EntryListPage,
    ListPage,
    ViewEntriesPage, 
    EditEntryPage,
    LogoutPage
  ],
  
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
