import {Component, Input, Output} from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {Device} from 'src/app/services/interfaces';
import {ReplaySubject} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  private data: Device[] = [];

  faSearch = faSearch;
  searchText: string = null;

  @Output()
  filteredData$: ReplaySubject<Device[]> = new ReplaySubject<Device[]>(1);

  @Input()
  set dataSource(val: Device[]) {
    this.data = val;
    this.filteredData$.next(val);
  }

  reset(): void {
    this.searchText = null;
    this.filteredData$.next(this.data);
  }

  filterDevices(event: string): void {
    this.filteredData$.next(this.data.filter(device => (device.title).toLowerCase().includes(event.toLowerCase())));
  }
}
