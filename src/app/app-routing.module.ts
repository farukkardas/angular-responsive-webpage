import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { ProductsComponent } from './pages/products/products.component';
import { Products2Component } from './pages/products2/products2.component';
import { Products3Component } from './pages/products3/products3.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  { path:'', component: FirstPageComponent },
  { path:'teams', component: ServicesComponent },
  { path:'human-resources', component: ProductsComponent },
  { path:'development', component: Products2Component },
  { path:'arge', component: Products3Component },
  { path:'contact', component: ContactComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
