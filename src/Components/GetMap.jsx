import { useContext } from "react";
import { MapContainer, TileLayer, Popup, Marker, useMap } from "react-leaflet";
import "leaflet-css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import { ipInfoContext } from "../App";
function GetMap() {
  const { ipInfo } = useContext(ipInfoContext);
  let location = ipInfo.loc.split(",");
  function MyComponent() {
    const map = useMap();
    map.setView([location[0], location[1]], 10);
    return null;
  }
  return (
    <div className="map-view">
      <MapContainer center={[location[0], location[1]]} zoom={10}>
        <MyComponent />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[location[0], location[1]]}
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
