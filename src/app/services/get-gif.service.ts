import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as appConfig } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetGifService {
  baseURL = `https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&limit=25&offset=0&rating=Y&lang=en`;

  constructor(private http: HttpClient) { }

  getGif(searchWord) {
    const gifUrl = `${this.baseURL}&q=${searchWord}`;
    return this.http.get(gifUrl);
  }
}
