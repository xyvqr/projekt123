import { OpinieComponent } from './opinie/opinie.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import {CommonModule, FormStyle} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import { AboutUsComponent } from './about-us/about-us.component';
import { OfferComponent } from './offer/offer.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AgmCoreModule } from '@agm/core';

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
    // BrowserAnimationsModule,AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyB2GgKl0Dw9aqpw4jj162bXvBVmNefDLEs',
    FormsModule,
    //BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toastr-bottom-right'
    }),
    NgbModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
