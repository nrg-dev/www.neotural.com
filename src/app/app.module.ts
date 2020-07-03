import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EnquiryService } from './_services/index';
import { AlertComponent } from './_directives/index';
//import { fakeBackendProvider } from './_helpers/index';
//import { JwtInterceptor } from './_helpers/index';
import { AuthGuard } from './_guards/index';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { JobseekerRegisterComponent } from './jobseeker-register/jobseeker-register.component';
import { ServicesComponent } from './services/services.component';
import { EnquiryLoginComponent } from './enquiry-login/enquiry-login.component';
import { EnquiryViewComponent } from './enquiry-view/enquiry-view.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DetailsheaderComponent } from './detailsheader/detailsheader.component';
import { FooterComponent } from './footer/footer.component';
import { CareerComponent } from './career/career.component';
import { IndustriesComponent } from './industries/industries.component';
import { NgxSpinnerModule } from "ngx-spinner";  

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,

    AboutComponent,
    ContactComponent,
    JobseekerRegisterComponent,
    ServicesComponent,
    EnquiryLoginComponent,
    EnquiryViewComponent,
    HeaderComponent,
    HomeComponent,
    DetailsheaderComponent,
    FooterComponent,
    CareerComponent,
    IndustriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgxSpinnerModule, 

  ],
  providers: [
    AuthGuard,
    EnquiryService,

    //{
     // provide: HTTP_INTERCEPTORS,
      //useClass: JwtInterceptor,
      //multi: true
    //},
    
    //fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
