import { Component, Input } from '@angular/core';
import { CharacterResponse } from '../models/characterResponse';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  @Input() res?: CharacterResponse;

  updateList(res: CharacterResponse) {
    this.res = res;
  }

  toTop(): void {
    window.scrollTo(0, 0);
  }
}