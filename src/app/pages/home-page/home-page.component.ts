import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {StateService} from 'src/app/services/state.service';
import {SearchComponent} from 'src/app/components/search/search.component';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements AfterViewInit {

  @ViewChild('searchComponent') searchComponent: SearchComponent;

  constructor(public state: StateService) {
  }

  ngAfterViewInit(): void {
    this.state.getAllDevices()
      .pipe(take(1))
      .subscribe((devices) => {
        setTimeout(() => {
          this.searchComponent.dataSource = devices;
        });
      });
  }
}
