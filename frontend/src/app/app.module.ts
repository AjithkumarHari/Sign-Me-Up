import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ErrorComponent } from './components/error/error.component';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './state/login.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/login.effects';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/parent/child/child.component';
import { DecimalPipe } from './pipes/decimal-pipe.pipe';
import { HeaderInterceptor } from './interceptors/header-interceptor.interceptor';
import { HighlightDirective } from './directives/highlight.directive';
import { AppNotDirective } from './directives/app-not.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    ProfileComponent,
    EditProfileComponent,
    ErrorComponent,
    AdminHomeComponent,
    AdminLoginComponent,
    ParentComponent,
    ChildComponent,
    DecimalPipe,
    HighlightDirective,
    AppNotDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ auth : authReducer }),
    EffectsModule.forRoot(AuthEffects)
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : HeaderInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
