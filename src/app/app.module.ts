import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

// Components
import { MenuComponent } from './components/menu/menu.component';

// Modules
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HomeComponent      } from './modules/home/home.component';
import { IniComponent       } from './modules/ini/ini.component';
import { ProfileComponent   } from './modules/profile/profile.component';
import { SignInComponent    } from './modules/sign-in/sign-in.component';
import { SignUpComponent    } from './modules/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
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
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'sign-up',
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
