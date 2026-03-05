import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search-filter',
  imports: [FormsModule],
  templateUrl: './search-filter.html',
  styleUrl: './search-filter.css',
})
export class SearchFilter {

  @Output() searchChange = new EventEmitter<string>();
  @Output() regionChange = new EventEmitter<string>();

  onSearch(event : Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchChange.emit(value);
  }

  onRegion(event : Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.regionChange.emit(value);
  }


}
