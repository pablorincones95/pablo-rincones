import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** Firebase */
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



/** Components **/
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { PortafolioComponent } from './components/pages/portafolio/portafolio.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { AboutMeComponent } from './components/pages/about-me/about-me.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { ItemComponent } from './components/pages/portafolio/item/item.component';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { ProjectComponent } from './components/dashboard/project/project.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


/** Services */
import { ProjectsService } from './services/projects.service';
import { CertificatesService } from './services/certificates.service';
import { DataOfPabloRinconesService } from './services/data-of-pablo-rincones.service';
import { ServiceWorkerModule } from '@angular/service-worker';

/** Directives */
import { DropzoneDirective } from './directives/dropzone.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    PortafolioComponent,
    ContactComponent,
    AboutMeComponent,
    NotFoundComponent,
    ItemComponent,
    SidenavComponent,
    ProjectComponent,
    DashboardComponent,
    DropzoneDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firestore, 'pablo-rincones'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ProjectsService,
    CertificatesService,
    DataOfPabloRinconesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
