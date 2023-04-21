import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleLoginProvider, SocialLoginModule } from '@abacritt/angularx-social-login';
import { AuthGuard } from '../shared/services/authguard.guard';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from '../home/home.module';
import { SharedModule } from '../shared/shared-module.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    SharedModule,
    SocialLoginModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true, //keeps the user signed in
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('380134897171-beflf6k8mi6tuil0fge41humm73hndb2.apps.googleusercontent.com') // your client id
        }
      ]
    }
  },
  AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
