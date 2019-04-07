import { isNgContainer } from "@angular/compiler";

export interface ILocation {
    address: string,
        city: string,
        country: string
}

export interface IEvent {
    id: number,
    name: string,
    date: string,
    time: string,
    price: number,
    imageUrl: string,
    location: ILocation
}