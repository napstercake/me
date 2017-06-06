// Packages
import { Routes } from '@angular/router';

// Modules
import { HomeComponent      } from '../../modules/home/home.component';
import { IniComponent       } from '../../modules/ini/ini.component';
import { NotFoundComponent  } from '../../modules/not-found/not-found.component';
import { ProfileComponent   } from '../../modules/profile/profile.component';
import { SignInComponent    } from '../../modules/sign-in/sign-in.component';
import { SignUpComponent    } from '../../modules/sign-up/sign-up.component';
import { ReserveComponent   } from '../../modules/reserve/reserve.component';
import { Step1Component     } from '../../modules/reserve/step1/step1.component';
import { Step2Component     } from '../../modules/reserve/step2/step2.component';
import { Step3Component     } from '../../modules/reserve/step3/step3.component';

export const appRouter:Routes = [
    {
        path: 'ini',
        component: IniComponent,
        data: { title: 'Welcome' }
    },
    {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Find your bandmate' }
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'reserve',
        component: ReserveComponent
    },
    {
        path: 'step1',
        component: Step1Component
    },
    {
        path: 'step2',
        component: Step2Component
    },
    {
        path: 'step3',
        component: Step3Component
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