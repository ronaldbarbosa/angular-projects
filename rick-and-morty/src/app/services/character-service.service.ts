import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterResponse } from '../models/characterResponse';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private readonly API = 'https://rickandmortyapi.com/api/character/?name=';
  constructor(private httpClient: HttpClient) { 
  }
  getCharacter(value: string): Observable<CharacterResponse> {
    return this.httpClient.get<CharacterResponse>(`${this.API}${value}`);
  }
  getPage(url: string): Observable<CharacterResponse> {
    return this.httpClient.get<CharacterResponse>(url);
  }
}
