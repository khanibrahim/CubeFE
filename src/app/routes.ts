import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';


import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { QBoardComponent } from './qboard/qboard.component';
//mport { ChangePasswordComponent } from './user/change-password/change-password.component';


export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent , canActivate:[AuthGuard] },
    {
        path: 'register', component: SignUpComponent
    },
    {
        path: 'login', component: SignInComponent
    },
    {
        path: 'qboard', component: QBoardComponent
    },
<<<<<<< HEAD
    { path : '', redirectTo:'/QBoard', pathMatch : 'full'}
    // ,
    // { path : 'ChangePassword',component:ChangePasswordComponent}
=======
    { path : '', redirectTo:'/qboard', pathMatch : 'full'}
>>>>>>> 15a90b83b6cfb1a1ed8c47d6ec79d3bfd7b79384
    
];