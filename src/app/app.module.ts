import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './shared/user.service';
import { RouterModule } from '@angular/router'
import { appRoutes } from './routes';
import { AuthGuard } from './auth/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';

import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HomeComponent } from './cube/home/home.component';
import { UserComponent } from './user/user.component';
import { QBoardComponent } from './cube/qboard/qboard.component';
import { NavigationComponent } from './cube/navigation/navigation.component';
import { QcanvasComponent } from './cube/qboard/qcanvas/qcanvas.component';
import { QcreateComponent } from './cube/qboard/qcreate/qcreate.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';

import { adminLteConf } from './admin-lte.conf';   //Import the layout configuration.
import { LayoutModule } from 'angular-admin-lte';
import { UserMenuComponent } from './AdminLTE/user-menu/user-menu.component';
import { CubeComponent } from './cube/cube.component';
import { MastersComponent } from './cube/masters/masters.component';   //Import the layout module.


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomeComponent,
    UserComponent,
    SignInComponent,
    QBoardComponent,
    NavigationComponent,
    QcanvasComponent,
    QcreateComponent,
    UserMenuComponent,
    CubeComponent,
    ChangePasswordComponent,
    MastersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule.forRoot(adminLteConf),   //Provide the configuration to the layout module.
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FormsModule
  ],
  exports:[UserMenuComponent],
  providers: [UserService,AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }

