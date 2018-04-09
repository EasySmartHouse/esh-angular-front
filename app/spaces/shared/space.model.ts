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