// Packages
import { Routes } from '@angular/router';

// Modules
import { HomeComponent      } from '../../modules/home/home.component';
import { IniComponent       } from '../../modules/ini/ini.component';
import { NotFoundComponent  } from '../../modules/not-found/not-found.component';
import { ProfileComponent   } from '../../modules/profile/profile.component';
import { SignInComponent    } from '../../modules/sign-in/sign-in.component';
import { SignUpComponent    } from '../../modules/sign-up/sign-up.component';


export const appRouter:Routes = [
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
    {
        path:'**', 
        component: NotFoundComponent
    }
]