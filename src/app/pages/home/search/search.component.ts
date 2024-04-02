import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  public query: string = '';

  search() {
    console.log('Searching for: ', this.query);
  }
}
