
export interface Device {
  id: string;
  title: string;
  status: DeviceStatus;
  type: DeviceType;
  related: string[];
}


export enum DeviceStatus {
  Available = 'Available',
  Offline = 'Offline'
}

export enum DeviceType {
  Small,
  Medium,
  Wide
}
