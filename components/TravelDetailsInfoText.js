import { View, Text } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS } from "../constants";

const TravelDetailsInfoText = ({ property }) => {
  return (
    <Text
      style={{
        fontFamily: FONTS.bold,
        fontSize: SIZES.extraLarge-3,
      }}
    >
      {property && property.text !== null ? property.text : "...loading"}
    </Text>
  );
};

export default TravelDetailsInfoText;
