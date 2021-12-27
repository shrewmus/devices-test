import {Component, Input, OnInit} from '@angular/core';
import {faInfoCircle, faMobileAlt, faTabletAlt, faTv} from '@fortawesome/free-solid-svg-icons';
import {Device, DeviceType} from 'src/app/services/interfaces';

@Component({
  selector: 'app-device-list-item',
  templateUrl: './device-list-item.component.html',
  styleUrls: ['./device-list-item.component.scss']
})
export class DeviceListItemComponent implements OnInit {

  faInfo = faInfoCircle;

  public type = {
    [DeviceType.Small]: faMobileAlt,
    [DeviceType.Medium]: faTabletAlt,
    [DeviceType.Wide]: faTv,
  };

  @Input() device: Device;
  @Input() mode = 'full';

  constructor() {
  }

  ngOnInit(): void {
  }

}
