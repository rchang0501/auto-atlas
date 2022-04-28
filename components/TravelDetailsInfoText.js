import { View, Text } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS } from "../constants";

const TravelDetailsInfoText = ({ property, propertyTitle }) => {
  return (
    <View style={{ flexDirection: "row", paddingBottom: SIZES.small }}>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.font,
        }}
      >
        {propertyTitle}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.font,
        }}
      >
        {property && property.text !== null ? property.text : "unavailable"}
      </Text>
    </View>
  );
};

export default TravelDetailsInfoText;
