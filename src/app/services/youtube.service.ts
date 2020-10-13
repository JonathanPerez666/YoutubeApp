import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
    private apikey = 'AIzaSyDABQw_eXJVxGu_ITpLsJ4PBjmQOGIRidg';
    private playlist = 'UUuaPTYj15JSkETGnEseaFFg';
    private nextPageToken = '';

  constructor( private http: HttpClient ) { }

  getVideos(){

    const url = `${ this.youtubeUrl }/playlistItems`;
    const params = new HttpParams()
    .set('part', 'snippet')
    .set('maxResults', '10')
    .set('playlistId', this.playlist)
    .set('key', this.apikey)

    return this.http.get( url, { params }  );
  }

}
