export interface ISpace {
    id: number
    name: string
    image: string
    devices: IDevice[]
}

export enum DeviceType {
    Sensor,
    Switch,
    AdjustableSwitch, 
    SignalingElement
}

export interface IDevice {
    id: number
    label: string
    address: string
    enabled: boolean
    type: DeviceType
    description: string
    value: any,
    popularity: number
}