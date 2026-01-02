import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const MAPBOX_TOKEN = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'

export default function MapboxComponent() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)

  useEffect(() => {
    if (map.current) return
    
    if (mapContainer.current) {
      mapboxgl.accessToken = MAPBOX_TOKEN
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [77.5946, 12.9716],
        zoom: 10,
        interactive: true
      })

      new mapboxgl.Marker({
        color: '#8b5cf6'
      })
      .setLngLat([77.5946, 12.9716])
      .addTo(map.current)
    }

    return () => {
      if (map.current) {
        map.current.remove()
      }
    }
  }, [])

  return <div ref={mapContainer} className="w-full h-full" />
}