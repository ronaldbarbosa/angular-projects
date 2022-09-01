import { Component, EventEmitter, Output } from '@angular/core';
import { CharacterService } from './services/character-service.service';
import { CharacterResponse } from './models/characterResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  response!: CharacterResponse;
  alert = false;

  constructor(public caracterService: CharacterService) {
  }

  search(input: HTMLInputElement) {
    if(input.value === '') alert('Campo de entrada vazio');
    else(this.caracterService.getCharacter(input.value)?.subscribe(
      r => {
      this.response = r;
      this.alert = false;
    }, err => {
      this.alert = true;
    }));
    input.value = '';
  }
}