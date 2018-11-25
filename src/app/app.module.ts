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
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { QBoardComponent } from './qboard/qboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { QcanvasComponent } from './qboard/qcanvas/qcanvas.component';
import { QcreateComponent } from './qboard/qcreate/qcreate.component';



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
    QcreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [UserService,AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

