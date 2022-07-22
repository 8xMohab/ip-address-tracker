import { useContext } from "react";
import { MapContainer, TileLayer, Popup, Marker, useMap } from "react-leaflet";
import "leaflet-css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import { ipInfoContext } from "../App";
function GetMap() {
  const { ipInfo } = useContext(ipInfoContext);
  function MyComponent() {
    const map = useMap();
    map.setView([ipInfo.lat, ipInfo.lon], 10);
    return null;
  }
  return (
    <div className="map-view">
      <MapContainer center={[ipInfo.lat, ipInfo.lon]} zoom={10}>
        <MyComponent />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[ipInfo.lat, ipInfo.lon]}
          icon={
            new Icon({
              iconUrl: markerIcon,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
        >
          <Popup>{ipInfo.city}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default GetMap;
