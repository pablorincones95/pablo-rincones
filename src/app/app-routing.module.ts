import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { AboutMeComponent } from './components/pages/about-me/about-me.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { PortafolioComponent } from './components/pages/portafolio/portafolio.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { ItemComponent } from './components/pages/portafolio/item/item.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'acerca-de-mi', component: AboutMeComponent },
  { path: 'contactame', component: ContactComponent },
  { path: 'item', component: ItemComponent },
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'servicios', component: ServicesComponent },
  { path: '**', pathMatch: 'full', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
