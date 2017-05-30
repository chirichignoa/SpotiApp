import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists: any[]= [];
  searchUrl:string = "https://api.spotify.com/v1/search";
  getArtistUrl:string = "https://api.spotify.com/v1/artists";

  constructor( private httpModule: Http ) { }

  searchArtist( artist:string ){
    let query = `?q=${artist}&type=artist`;
    let url = this.searchUrl + query;

    return this.httpModule.get( url )
                          .map( res =>{
                            //console.log(res.json().artists.items);
                            this.artists = res.json().artists.items;
                          });
  }

  getArtist( id:string ){
    let query = `/${id}`;
    let url = this.getArtistUrl + query;

    return this.httpModule.get( url )
                          .map( res =>{
                            console.log(res.json());
                            return res.json();
                          });
  }

  getTopSongs( id:string ){
    let query = `/${id}/top-tracks?country=AR`;
    let url = this.getArtistUrl + query;

    return this.httpModule.get( url )
                          .map( res =>{
                            console.log(res.json().tracks);
                            return res.json().tracks;
                          });
  }

}
