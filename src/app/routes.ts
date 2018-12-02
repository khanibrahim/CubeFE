import { Routes } from '@angular/router';
import { HomeComponent } from './cube/home/home.component';
import { AuthGuard } from './auth/auth.guard';


import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { QBoardComponent } from './cube/qboard/qboard.component';
import { CubeComponent } from './cube/cube.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { MastersComponent } from './cube/masters/masters.component'

export const appRoutes: Routes = [    
    {
        path: 'register', 
        component: SignUpComponent
    },
    {
        path: 'login', 
        component: SignInComponent
    },
    {
        path: 'cube', 
        component: CubeComponent,
        children: [
            { 
                path: 'home', 
                component: HomeComponent 
                //, canActivate: [AuthGuard] 
            },
            {
                path: 'masters',
                component: MastersComponent
            },
            {
                path: 'qboard',
                component: QBoardComponent
            }
        ]

    },
    {
        path: 'changepassword', 
        component: ChangePasswordComponent
    },
    { 
        path : '', 
        redirectTo: '/cube', 
        pathMatch : 'full'
    }
 ];
