// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for missing Leaflet marker icons
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import customLocationIconUrl from "./icon.png"; // Add your custom icon path

// Set default icons for Leaflet
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Custom icon for the marker
const customIcon = L.icon({
  iconUrl: customLocationIconUrl, // Custom icon URL
  iconSize: [25, 41], // Icon size
  iconAnchor: [12, 41], // Anchor point
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// eslint-disable-next-line react/prop-types
const SearchControl = ({ query, setLat, setLng, setError }) => {
  const map = useMap();

  useEffect(() => {
    const fetchLocation = async () => {
      if (!query) return;

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
            query
          )}&format=json&limit=1`
        );
        const data = await response.json();

        if (data.length > 0) {
          const location = data[0];
          const lat = parseFloat(location.lat);
          const lng = parseFloat(location.lon);

          // Update map center and state
          map.flyTo([lat, lng], 12);
          setLat(lat);
          setLng(lng);
          setError(null); // Clear any previous error
        } else {
          setError("Location not found");
        }
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError("Error fetching location");
      }
    };

    fetchLocation();
  }, [map, query, setError, setLat, setLng]); // Trigger search when query changes

  return null;
};

const App = () => {
  const [query, setQuery] = useState("");
  const [lng, setLng] = useState(-74.5); // Default longitude
  const [lat, setLat] = useState(40); // Default latitude
  const [searchTerm, setSearchTerm] = useState(""); // Track search term for button click
  const [error, setError] = useState(null);

  const handleSearch = () => {
    setQuery(searchTerm); // Trigger the search with the input value
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      {/* Top Bar */}
      <div className="flex items-center bg-white p-4 pb-2 justify-between">
        <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
          Map
        </h2>
      </div>

      {/* Map Container */}
      <div className="flex flex-1 flex-col h-full">
        <MapContainer
          center={[lat, lng]}
          style={{ height: "100vh", width: "100%" }}
          zoom={12}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[lat, lng]} icon={customIcon}></Marker>
          <SearchControl
            query={query}
            setLat={setLat}
            setLng={setLng}
            setError={setError}
          />
        </MapContainer>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-white p-4 border-t border-gray-300">
        <input
          type="text"
          placeholder="Search for a location"
          className="form-input flex-grow p-2 border border-gray-300 rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
          onClick={handleSearch} // Trigger search on button click
        >
          Search
        </button>
      </div>

      {/* Error message display */}
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
    </div>
  );
};

export default App;
