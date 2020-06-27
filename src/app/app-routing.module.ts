import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'enquirylogin', component: EnquiryLoginComponent },
  { path: 'enquiryview', component: EnquiryViewComponent },
  { path: 'jobseeker-register', component: JobseekerRegisterComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'home', component: HomeComponent },
  { path: 'detailsheader', component: DetailsheaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'career', component: CareerComponent },

  { path: '**', redirectTo: '/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
