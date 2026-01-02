import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function MapComponent() {
  return (
    <MapContainer
      center={[12.9716, 77.5946]}
      zoom={11}
      scrollWheelZoom={true}
      className="w-full h-full"
      style={{ background: '#18181b' }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
    </MapContainer>
  )
}