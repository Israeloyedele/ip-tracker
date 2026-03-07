import type { Location } from "../types/ipDetails.ts";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import type { LatLngExpression } from "leaflet";
import L from "leaflet";

export function Map(props:{ location: Location | undefined; loading: boolean }) {
    const { location, loading } = props;

    const position: LatLngExpression = location? [location?.lat, location?.lng] : [0,0];
    const customIcon = L.icon({
        iconUrl: "/images/icon-location.svg",
        iconSize: [40, 50],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
    });


    return(
        <div> { loading ? <></> :
            <MapContainer
                center={position}
                zoom={13}
                style={{ height: "60vh", width: "100%" }}
                scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={customIcon}>
                    <Popup>
                        Approximate Location
                    </Popup>
                </Marker>
            </MapContainer>}
        </div>
    )
}