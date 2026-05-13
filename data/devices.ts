export interface Device {
  name: string
  specs: string
  description: string
  image: string
  link: string
}

export interface DevicesData {
  [brand: string]: Device[]
}

export const devicesData: DevicesData = {}
