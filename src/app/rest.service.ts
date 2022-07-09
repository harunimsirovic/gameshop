import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Games } from './models/Games';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  gamesUrl: string = "https://my-json-server.typicode.com/harunimsirovic/Gameshop-Mixpanel/Games"
  // http://localhost:3000/VR
  hardwareUrl: string = "https://my-json-server.typicode.com/harunimsirovic/Gameshop-Mixpanel/VR"


  getGames() {
    return this.http.get<Games[]>(this.gamesUrl);
  }

  getHardware() {
    return this.http.get<Games[]>(this.hardwareUrl);
  }
}
