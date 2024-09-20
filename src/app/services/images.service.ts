import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import  Image  from '../models/images-models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  apiUrl = "http://localhost:3000"
  httpClient = inject(HttpClient)
  constructor() { }


  getImages(): Observable<Image[]> {
    return this.httpClient.get<Image[]>(`${this.apiUrl}/images`);
  }
}