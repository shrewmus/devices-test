import {Component, Input, OnInit} from '@angular/core';
import {Device} from 'src/app/services/interfaces';
import {StateService} from 'src/app/services/state.service';
import {ReplaySubject} from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  title: string;

  @Input() deviceId: string;

  device$: ReplaySubject<Device> = new ReplaySubject<Device>(1);

  constructor(private state: StateService) {
  }

  ngOnInit(): void {
    this.state
      .getDeviceData(this.deviceId)
      .pipe(take(1))
      .subscribe((device) => {
        this.device$.next(device);
      });
  }

}
