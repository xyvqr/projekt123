import {OpinieComponent} from './opinie/opinie.component';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {NavComponent} from './nav/nav.component';
import {CommonModule, FormStyle} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RegisterComponent} from './register/register.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import {AboutUsComponent} from './about-us/about-us.component';
import {OfferComponent} from './offer/offer.component';
import {ContactComponent} from './contact/contact.component';
import {LoginComponent} from './login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxSpinnerModule} from 'ngx-spinner';
import {RouterModule} from '@angular/router';
import {AppConfigService} from './services/app-config.service';
import { AuthInterceptorService } from './services/interceptors/auth-interceptor.service';
import { GoogleMapsModule, MapMarker, GoogleMap } from '@angular/google-maps';
import { NgImageSliderModule } from 'ng-image-slider';

export function initConfig(appConfig: AppConfigService) {
  return () => appConfig.loadConfig();
}

@NgModule({
  declarations: [
    OpinieComponent,
    AppComponent,
    HomeComponent,
    NavComponent,
    RegisterComponent,
    OfferComponent,
    AboutUsComponent,
    OfferComponent,
    ContactComponent,
    AboutUsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 1500
    }),
    NgbModule,
    CommonModule,
    NgxSpinnerModule,
    GoogleMapsModule,
    NgImageSliderModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'opinie', component: OpinieComponent}
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [AppConfigService],
      multi: true,
    },
    GoogleMap
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
