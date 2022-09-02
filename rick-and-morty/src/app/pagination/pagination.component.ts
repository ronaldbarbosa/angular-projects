import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CharacterResponse } from '../models/characterResponse';
import { CharacterService } from '../services/character-service.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() response?: CharacterResponse;
  @Output() newResponse = new EventEmitter();

  constructor(public service: CharacterService) { }

  previousPage(): void {
    this.scrollToTop();
    if(this.response?.info.prev) {
      this.service.getPage(this.response.info.prev).subscribe(r => {
        this.response = r;
        this.newResponse.emit(this.response);
      });
    }
  }

  nextPage(): void {
    this.scrollToTop()
    if(this.response?.info.next) {
      this.service.getPage(this.response.info.next).subscribe(r => {
        this.response = r; 
        this.newResponse.emit(this.response);
      });
    }
  }

  private scrollToTop():void {
    window.scrollTo(0, 0);
  }
}
