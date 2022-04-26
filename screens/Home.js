import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";

import { assets, FONTS, COLORS, SIZES } from "../constants";
import NavCard from "../components/NavCard";

const Header = () => {
  return (
    <View>
      <View
        style={{
          marginTop: SIZES.font,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.small,
            textAlign: "center",
            textAlignVertical: "center",
            fontFamily: FONTS.medium,
          }}
        >
          My Model X
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={assets.battery}
          resizeMode="contain"
          style={{ width: 72, height: 40, marginHorizontal: SIZES.small }}
        ></Image>
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.xxl,
            paddingVertical: SIZES.font,
            fontFamily: FONTS.bold,
          }}
        >
          280 KM
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: -SIZES.font,
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.large,
            textAlign: "center",
            textAlignVertical: "center",
            fontFamily: FONTS.semiBold,
          }}
        >
          Parked
        </Text>
      </View>
    </View>
  );
};

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
            <Header />
            <View style={{ height: 200 }} />
            <Text style={{color: COLORS.white, paddingVertical: SIZES.font, paddingHorizontal: SIZES.xxl, fontFamily: FONTS.semiBold}} >Where to today?</Text>
            <NavCard />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;
