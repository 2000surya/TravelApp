import * as Location from "expo-location";
import { useEffect, useState } from "react";

const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCurrentLocation = async () => {
    try {
      setLoading(true);

      // 🔐 Request permission
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Permission denied");
        setLoading(false);
        return;
      }

      // 📍 Get coordinates
      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);

      // 🌍 Reverse geocode (lat/lng → address)
      const result = await Location.reverseGeocodeAsync({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      });

      if (result.length > 0) {
        setAddress(result[0]);
      }
    } catch (error) {
      setErrorMsg("Failed to get location");
      console.log("Location error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return {
    location,
    address,
    errorMsg,
    loading,
    refetchLocation: getCurrentLocation, // 👈 optional (manual refresh)
  };
};

export default useLocation;
