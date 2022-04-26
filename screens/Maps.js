import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import MapView from 'react-native-maps';

import { COLORS } from "../constants";

const Maps = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={tw`h-1/2`} >
        <Map />
      </View>
      <View style={tw`h-1/2`} ></View>
    </View>
  );
};

export default Maps;
