import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

import { assets, FONTS, COLORS, SIZES } from "../constants";
import NavCard from "../components/NavCard";
import HomeHeader from "../components/HomeHeader";

const Home = () => {
  return (
    <ImageBackground
      source={assets.homeBkg}
      style={{
        height: null,
        resizeMode: "cover",
        overflow: "hidden",
        flex: 1,
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{ top: 0, bottom: 0, right: 0, left: 0 }}>
            <HomeHeader />
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
                placeholder="Where are we starting?"
                textInputProps={{
                  selectionColor: COLORS.white,
                  placeholderTextColor: COLORS.white,
                }}
                styles={{
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
                    backgroundColor: "transparent",
                  },
                  description: {
                    color: COLORS.white,
                  },
                  separator: {
                    backgroundColor: "transparent",
                  },
                }}
                onPress={(data, details = null) => {
                  console.log(data);
                  console.log(details);
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
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;
