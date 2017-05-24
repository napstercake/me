import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';

import { AppComponent } from './app.component';

// Components
import { MenuComponent } from './components/menu/menu.component';
import { FinderComponent } from './components/finder/finder.component';

// Modules
import { HomeComponent      } from './modules/home/home.component';
import { IniComponent       } from './modules/ini/ini.component';
import { ProfileComponent   } from './modules/profile/profile.component';
import { SignInComponent    } from './modules/sign-in/sign-in.component';
import { SignUpComponent    } from './modules/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FinderComponent,
    HomeComponent,
    IniComponent,
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
    RouterModule.forRoot([
      {
        path: 'ini',
        component: IniComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'signin',
        component: SignInComponent
      },
      {
        path: 'signup',
        component: SignUpComponent
      },
      { 
        path: '',   
        redirectTo: '/ini', 
        pathMatch: 'full'
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
