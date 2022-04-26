import { View, Text, ImageBackground} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { assets } from "../constants";

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
            <Text style={{ color: "#FFF", bottom: 0 }}>Home</Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;
