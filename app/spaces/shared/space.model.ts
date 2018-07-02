export interface ISpace {
    id: number
    name: string
    image: string
    devices: IDevice[]
}

export enum DeviceType {
    Sensor = 0,
    Actuator = 1,
    AdjustableSwitch = 2,
    SignalingElement = 3
}

export namespace DeviceType {

    export function keys(): Array<string>{
      var keys = Object.keys(DeviceType);
      return keys.slice(keys.length / 2, keys.length-1);
    }
}

export interface IDevice {
    id: number
    label: string
    address: string
    enabled: boolean
    deviceType: DeviceType
    description: string
    value: any,
    voters: number[]
}