import {Injectable} from '@angular/core';
import {Device, DeviceStatus, DeviceType} from 'src/app/services/interfaces';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private devices: { [key: string]: Device } = {
    1: {
      id: '1',
      related: ['2', '3', '4'],
      status: DeviceStatus.Available,
      title: 'Device 1',
      type: DeviceType.Small,
    },
    2: {
      id: '2',
      related: ['1', '6'],
      status: DeviceStatus.Offline,
      title: 'Device 2',
      type: DeviceType.Medium,
    },
    3: {
      id: '3',
      related: ['1'],
      status: DeviceStatus.Available,
      title: 'Device 3',
      type: DeviceType.Wide,
    },
    4: {
      id: '4',
      related: ['1'],
      status: DeviceStatus.Available,
      title: 'Device 4',
      type: DeviceType.Small,
    },
    6: {
      id: '6',
      related: ['4'],
      status: DeviceStatus.Offline,
      title: 'Device 6',
      type: DeviceType.Medium,
    }
  };

  getAllDevices(): Observable<Device[]> {
    return new Observable<Device[]>((subscriber) => {
      subscriber.next(Object.values(this.devices));
    });
  }

  getDeviceData(id: string): Observable<Device> {
    return new Observable<Device>((subscriber) => {
      subscriber.next(this.devices[id]);
    });
  }

  getRelatedDevices(id: string): Observable<Device[]> {
    return new Observable<Device[]>((subscriber) => {
      const fitlerIds = this.devices[id].related;
      subscriber.next(Object.values(this.devices).filter(device => fitlerIds.includes(device.id)));
    });
  }
}
