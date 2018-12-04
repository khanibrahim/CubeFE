import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';


import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { QBoardComponent } from './qboard/qboard.component';
//mport { ChangePasswordComponent } from './user/change-password/change-password.component';


export const appRoutes: Routes = [
    { path: 'Home', component: HomeComponent , canActivate:[AuthGuard] },
    {
        path: 'Register', component: SignUpComponent
    },
    {
        path: 'Login', component: SignInComponent
    },
    { path : 'QBoard', component:QBoardComponent}
,
    { path : '', redirectTo:'/QBoard', pathMatch : 'full'}
    // ,
    // { path : 'ChangePassword',component:ChangePasswordComponent}
    
];