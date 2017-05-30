import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

  artist:any = [];
  topSongs:any = [];

  constructor( private activatedRoute:ActivatedRoute,
               private spotifyService:SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params
    .map(parametros=>parametros['id'])
    .subscribe( id => {
        this.spotifyService.getArtist(id)
        .subscribe( data => {this.artist = data; });
        this.spotifyService.getTopSongs(id)
        .subscribe( data => {this.topSongs = data; });
      }
    );
  }

}
