import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";

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
            <View style={{ height: 200 }} />
            <Text style={{color: COLORS.white, paddingVertical: SIZES.font, fontFamily: FONTS.semiBold, textAlign: 'center'}} >Where to today?</Text>
            <NavCard />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;
