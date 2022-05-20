import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import { Products2Component } from './pages/products2/products2.component';
import { Products3Component } from './pages/products3/products3.component';
import {MatSelectModule} from '@angular/material/select';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    FirstPageComponent,
    FooterComponent,
    ServicesComponent,
    ProductsComponent,
    ContactComponent,
    Products2Component,
    Products3Component  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatInputModule,
    MatSelectModule,
    NgbDropdownModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
