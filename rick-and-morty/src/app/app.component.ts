import { Component } from '@angular/core';
import { CharacterService } from './services/character-service.service';
import { CharacterResponse } from './models/characterResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  response!: CharacterResponse;
  alertNotFound = false;
  alertEmptyField = false;

  constructor(public caracterService: CharacterService) { }

  search(input: HTMLInputElement) {
    if(input.value === '') {
      this.alertEmptyField = true;
      this.alertNotFound = false;
    }
    else {
      this.alertEmptyField = false;
      this.caracterService.getCharacter(input.value)?.subscribe(
        r => {
          this.response = r;
          this.alertNotFound = false;
          this.alertEmptyField = false;
        }, err => {
          this.alertNotFound = true;
      })
    }
    input.value = '';
  }
}