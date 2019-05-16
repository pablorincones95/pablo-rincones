import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
