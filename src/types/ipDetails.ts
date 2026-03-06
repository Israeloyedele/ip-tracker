export interface IPDetails {
    ip: string,
    location: Location,
    as: As,
    isp: string
}
export interface Location {
    country: string,
    city: string,
    region: string,
    lat: number,
    lng: number,
    postalCode: string,
    timezone: string,
    geonameId: string
}
export interface As {
    asn: string,
    name: string,
    route: string,
    domain: string,
    type: string
}
export interface ErrorData {
    code: number,
    message: string
    messages: string
}