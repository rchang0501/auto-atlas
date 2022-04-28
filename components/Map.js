import { View, Text, Platform } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectOrigin, selectDestination } from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!origin || !destination) return;

    if (Platform.OS === "ios") {
      mapRef.current.fitToCoordinates(
        [
          { latitude: origin.location.lat, longitude: origin.location.lng },
          {
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          },
        ],
        {
          edgePadding: { top: 125, right: 50, bottom: 175, left: 50 },
        }
      );
    } else {
      mapRef.current.fitToCoordinates(
        [
          { latitude: origin.location.lat, longitude: origin.location.lng },
          {
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          },
        ],
        {
          edgePadding: { top: 50, right: 50, bottom: 150, left: 50 },
        }
      );
    }
  }, [origin, destination]);

  return (
    <View style={{ flex: 1 }}>
      {origin && (
        <MapView
          ref={mapRef}
          mapType="mutedStandard"
          style={{ flex: 1 }}
          initialRegion={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          {origin && destination && (
            <MapViewDirections
              origin={origin.description}
              destination={destination.description}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="black"
            />
          )}

          {origin?.location && (
            <Marker
              coordinate={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
              }}
              title="Origin"
              description={origin.description}
              identifier="origin"
            />
          )}

          {destination?.location && (
            <Marker
              coordinate={{
                latitude: destination.location.lat,
                longitude: destination.location.lng,
              }}
              title="Destination"
              description={destination.description}
              identifier="destination"
            />
          )}
        </MapView>
      )}
    </View>
  );
};

export default Map;
