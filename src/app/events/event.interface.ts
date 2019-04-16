import { isNgContainer } from "@angular/compiler";

export interface ILocation {
    address: string,
    city: string,
    country: string
}

export interface ISession {
    id: number,
    name: string,
    presenter: string,
    duration: number,
    level: string,
    abstract: string,
    voters: string[]
}

export interface IEvent {
    id: number,
    name: string,
    date: string,
    time: string,
    price: number,
    imageUrl: string,
    location?: ILocation,
    onlineUrl?: string,
    sessions: ISession[]
}