import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";

export default function Routing({ from, to }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(from[0], from[1]),
        L.latLng(to[0], to[1]),
      ],
      routeWhileDragging: true,
      addWaypoints: false,
      draggableWaypoints: false,
      lineOptions: {
        styles: [{ color: "blue", weight: 4 }],
      },
      show: false,
      createMarker: () => null,

      // 👇 Add this part right here
      router: L.Routing.osrmv1({
        serviceUrl: "https://router.project-osrm.org/route/v1",
      }),
    }).addTo(map);

    return () => {
      map.removeControl(routingControl);
    };
  }, [map, from, to]);

  return null;
}
