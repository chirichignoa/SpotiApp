import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/*COMPONENTS*/
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

/*ROUTES*/
import { APP_ROUTING } from './app.routes';

/*SERVICES*/
import { SpotifyService } from './services/spotify.service';
import { ArtistComponent } from './components/artist/artist.component';

/*PIPES*/
import { WithoutPhotoPipe } from './pipes/withoutphoto.pipe';
import { DomSeguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    WithoutPhotoPipe,
    DomSeguroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
