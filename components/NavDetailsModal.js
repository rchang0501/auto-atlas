import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { setModalVisible } from "../slices/navSlice";
import { useDispatch } from "react-redux";
import { COLORS, SIZES, FONTS } from "../constants";

const NavDetailsModal = () => {
  const dispatch = useDispatch();

  return (
    <View
      style={{
        zIndex: 1,
        position: "absolute",
        bottom: -50,
        right: 0,
        left: 0,
        height: 320,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.medium,
      }}
    >
      <View style={{ padding: SIZES.font }}>
        <Text
          style={{
            textAlign: "center",
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
            paddingBottom: SIZES.small,
          }}
        >
          Travel Details
        </Text>
        <View style={{ height: 130 }} />
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              dispatch(setModalVisible(false));
            }}
            style={{
              backgroundColor: COLORS.translucent,
              padding: SIZES.small,
              borderRadius: SIZES.xxl,
            }}
          >
            <Text style={{ color: COLORS.white, fontFamily: FONTS.medium }}>
              Hide Details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NavDetailsModal;
