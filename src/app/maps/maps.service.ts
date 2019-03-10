import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(
    private http: HttpClient
  ) { }

  getUserLocationData() {
    return this.http.get('https://ipapi.co/json/');
  }

}
