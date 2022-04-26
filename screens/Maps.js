import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "../constants";

const Maps = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, top: 0, bottom: 0, right: 0, left: 0 }}>
        <Text>Maps</Text>
      </View>
    </SafeAreaView>
  );
};

export default Maps;
