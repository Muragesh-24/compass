// TODO: what is it ?
export {};
declare global {
  interface Window {
    mapRef: React.RefObject<maplibregl.Map | null>;
    markerRef: React.RefObject<maplibregl.Marker | null>;
    
  }
   interface WindowEventMap {
    "search-location": CustomEvent<{ lng: number; lat: number }>;
  }
}
