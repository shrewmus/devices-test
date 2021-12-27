import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StateService} from 'src/app/services/state.service';
import {ReplaySubject} from 'rxjs';
import {Device} from 'src/app/services/interfaces';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  devices$: ReplaySubject<Device[]> = new ReplaySubject<Device[]>(1);

  get id(): string {
    return this.route.snapshot.params.id;
  }

  constructor(private route: ActivatedRoute, private state: StateService) {
  }

  ngOnInit(): void {
    this.state
      .getRelatedDevices(this.id)
      .pipe(take(1))
      .subscribe((devices) => {
        this.devices$.next(devices);
      })
  }

}
