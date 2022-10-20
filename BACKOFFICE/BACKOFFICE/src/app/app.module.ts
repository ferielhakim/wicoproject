import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { NavbarComponent } from './Layouts/navbar/navbar.component';
import { HeaderComponent } from './Layouts/header/header.component';
import { SidebarComponent } from './Layouts/sidebar/sidebar.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { PreloaderComponent } from './Layouts/preloader/preloader.component';
import { RapportListComponent } from './rapport-list/rapport-list.component';
import { RapportAddComponent } from './rapport-add/rapport-add.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PreloaderComponent,
    RapportListComponent,
    RapportAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
