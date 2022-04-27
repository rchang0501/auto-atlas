import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import MapView from "react-native-maps";
import NavDetails from "./NavDetails";
import Destination from "./Destination";
import { COLORS, SIZES, FONTS } from "../constants";
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import { selectModalVisible, setModalVisible } from "../slices/navSlice";

const Maps = () => {
  const Stack = createStackNavigator();
  const dispatch = useDispatch();
  const modalVisible = useSelector(selectModalVisible);

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ zIndex: -1, flex: 1 }}>
        <Map />
      </View>
      <View
        style={{
          zIndex: 0,
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          height: 340,
        }}
      >
        <View style={{ flex: 1 }}>
          <Stack.Navigator>
            <Stack.Screen
              name="Destination"
              component={Destination}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="NavDetails"
              component={NavDetails}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </View>
      </View>

      {modalVisible === true && (
        <View
          style={{
            zIndex: 1,
            position: "absolute",
            bottom: -50,
            right: 0,
            left: 0,
            height: 280,
            backgroundColor: COLORS.white,
            borderRadius: SIZES.medium,
          }}
        >
          <View style={{padding: SIZES.font}} >
            <Text>Travel Details</Text>
            <TouchableOpacity
              onPress={() => {
                dispatch(setModalVisible(false));
              }}
              style={{ backgroundColor: COLORS.primary }}
            >
              <Text style={{ color: COLORS.white }}>hide details</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Maps;
