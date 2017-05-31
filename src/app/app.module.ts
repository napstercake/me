import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';

import { AppComponent } from './app.component';

// Components
import { MenuComponent    } from './components/menu/menu.component';
import { FinderComponent  } from './components/finder/finder.component';
import { AlertComponent   } from './components/alert/alert.component';

// Modules
import { HomeComponent      } from './modules/home/home.component';
import { IniComponent       } from './modules/ini/ini.component';
import { NotFoundComponent  } from './modules/not-found/not-found.component';
import { ProfileComponent   } from './modules/profile/profile.component';
import { SignInComponent    } from './modules/sign-in/sign-in.component';
import { SignUpComponent    } from './modules/sign-up/sign-up.component';

// Core
import { appRouter } from './core/router/router';

// Services
import { RouterService } from './core/router/router.service';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyDYfnQu1PQ2r4L-4_jMUjIPjuc-V-tMiJ4",
    authDomain: "music-engine-61191.firebaseapp.com",
    databaseURL: "https://music-engine-61191.firebaseio.com",
    projectId: "music-engine-61191",
    storageBucket: "music-engine-61191.appspot.com",
    messagingSenderId: "262977240441"
}

@NgModule({
  declarations: [
    AppComponent,
    
    MenuComponent,
    
    FinderComponent,
    AlertComponent,

    HomeComponent,
    IniComponent,
    NotFoundComponent,
    ProfileComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    RouterModule.forRoot(appRouter),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [RouterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
