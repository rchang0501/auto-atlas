import {
  View,
  Text,
  StyleSheet,
  Modal,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS, SIZES, SHADOWS } from "../constants";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { setModalVisible } from "../slices/navSlice";
import NavFavsAlt from "../components/NavFavsAlt";

const Destination = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
      <View style={{ paddingHorizontal: SIZES.xxl }}>
        <View style={{ paddingVertical: SIZES.small }}>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            textInputProps={{
              selectionColor: COLORS.white,
              placeholderTextColor: COLORS.white,
            }}
            styles={toInputBoxStyles}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              dispatch(setModalVisible(true));
            }}
            fetchDetails={true}
            returnKeyType={"search"}
            enablePoweredByContainer={false}
            minLength={2}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
        </View>
        <View style ={{marginTop: -6}} >
          <NavFavsAlt />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Destination;

const toInputBoxStyles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "transparent",
  },
  textInput: {
    fontSize: SIZES.font,
    fontFamily: FONTS.regular,
    backgroundColor: COLORS.translucent,
    color: COLORS.white,
  },
  listView: {
    color: COLORS.white,
  },
  row: {
    backgroundColor: COLORS.white,
  },
});
