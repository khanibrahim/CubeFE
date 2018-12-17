import { Routes } from '@angular/router';
import { HomeComponent } from './cube/home/home.component';
import { AuthGuard } from './auth/auth.guard';

import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { QBoardComponent } from './cube/qboard/qboard.component';
import { CubeComponent } from './cube/cube.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { MastersComponent } from './cube/settings/masters/masters.component'
import { QuestionmasterComponent } from './cube/settings/masters/questionmaster/questionmaster.component'
import { CourseComponent } from './cube/settings/masters/course/course.component'
import { SubjectmasterComponent } from './cube/settings/masters/subjectmaster/subjectmaster.component';


import { UserprofileComponent } from './cube/settings/userprofile/userprofile.component'
import { PropertyprofileComponent } from './cube/settings/propertyprofile/propertyprofile.component'
import { SettingsComponent } from './cube/settings/settings.component'

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
        canActivate: [AuthGuard],
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'qboard',
                component: QBoardComponent
            },
            {
                path: 'settings',
                component: SettingsComponent,
                children: [
                    {
                        path: 'masters',
                        component: MastersComponent,
                        children: [
                            {
                                path: 'questions',
                                component: QuestionmasterComponent
                            },
                            {
                                path: 'courses',
                                component: CourseComponent
                            },
                            {
                                path: 'subjects',
                                component: SubjectmasterComponent
                            }
                        ]
                    },
                    {
                        path: 'userprofile',
                        component: UserprofileComponent
                    },
                    {
                        path: 'propertyprofile',
                        component: PropertyprofileComponent
                    }

                ]
            },

        ]

    },
    {
        path: 'changepassword',
        component: ChangePasswordComponent
    },
    {
        path: '',
        redirectTo: '/cube',
        pathMatch: 'full'
    }
];
