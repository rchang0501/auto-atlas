import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { assets, FONTS, COLORS, SIZES } from "../constants";
import NavCard from "../components/NavCard";
import NavFavs from "../components/NavFavs";
import HomeHeader from "../components/HomeHeader";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [header, setHeader] = useState(true);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          zIndex: -1,
          flex: 1,
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <ImageBackground
          source={assets.homeBkg}
          style={{
            height: null,
            resizeMode: "cover",
            overflow: "hidden",
            flex: 1,
          }}
        />
      </View>
      <SafeAreaView
        style={{ flex: 1, zIndex: 0, backgroundColor: "transparent" }}
      >
        {header === true && <HomeHeader />}
        <View
          style={{
            alignContent: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Image
            source={assets.modelx}
            style={{
              width: 300,
              height: 200,
              resizeMode: "contain",
            }}
          />
        </View>
        <View style={{ paddingHorizontal: 38 }}>
          <GooglePlacesAutocomplete
            placeholder="Where from?"
            textInputProps={{
              onPressIn: () => setHeader(false),
              onEndEditing: () => setHeader(true),
              selectionColor: COLORS.white,
              placeholderTextColor: COLORS.white,
            }}
            styles={toInputBoxStyles}
            onPress={(data, details = null) => {
              dispatch(
                setOrigin({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              dispatch(setDestination(null));
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
        <NavCard />
        <Text
          style={{
            paddingHorizontal: 42,
            color: COLORS.white,
            marginTop: SIZES.small,
            fontFamily: FONTS.semiBold,
          }}
        >
          Quick Start
        </Text>
        <NavFavs />
      </SafeAreaView>
    </View>
  );
};

export default Home;

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
    borderRadius: SIZES.medium,
  },
  listView: {
    color: COLORS.white,
  },
  row: {
    backgroundColor: "transparent",
  },
  description: {
    color: COLORS.white,
  },
  separator: {
    backgroundColor: "transparent",
  },
});
