import { View, Text, Image } from "react-native";
import React from "react";
import { assets, FONTS, COLORS, SIZES } from "../constants";

const HomeHeader = () => {
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

export default HomeHeader;
