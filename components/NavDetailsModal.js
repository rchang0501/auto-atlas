import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  selectTravelTimeInformation,
  setModalVisible,
} from "../slices/navSlice";
import { useDispatch, useSelector } from "react-redux";
import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";
import tw from "tailwind-react-native-classnames";
import TravelDetailsInfoText from "./TravelDetailsInfoText";

const NavDetailsModal = () => {
  const dispatch = useDispatch();
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  if (!travelTimeInformation) {
    return null;
  } else {
    return (
      <View
        style={[
          tw`${!travelTimeInformation && "opacity-0"}`,
          {
            zIndex: 1,
            position: "absolute",
            bottom: -50,
            right: 0,
            left: 0,
            height: 320,
            backgroundColor: COLORS.white,
            borderRadius: SIZES.xxl,
            elevation: 50,
          },
        ]}
      >
        {/* <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            alignSelf: "center",
            backgroundColor: COLORS.gray,
            height: 5,
            width: 30,
            borderRadius: 10,
            top: 7,
          }}
        /> */}
        <View style={{ padding: SIZES.font }}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.medium,
            }}
          >
            Travel Details
          </Text>
          <View style={{ padding: SIZES.extraLarge }}>
            <TravelDetailsInfoText
              property={travelTimeInformation?.distance}
              propertyTitle="Travel Distance: "
            />
            <TravelDetailsInfoText
              property={travelTimeInformation?.duration}
              propertyTitle="Travel Duration: "
            />
            <TravelDetailsInfoText
              property={travelTimeInformation?.duration_in_traffic}
              propertyTitle="Duration in Traffic: "
            />
          </View>
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
  }
};

export default NavDetailsModal;
