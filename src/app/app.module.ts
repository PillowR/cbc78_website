import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PicturesComponent } from './pictures/pictures.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { AdministrationBoardComponent } from './administration-board/administration-board.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PlanningComponent } from './planning/planning.component';
import { InterclubsComponent } from './interclubs/interclubs.component';
import { ContactComponent } from './contact/contact.component';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  declarations: [
    AppComponent,
    PicturesComponent,
    JoinUsComponent,
    AdministrationBoardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PlanningComponent,
    InterclubsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
