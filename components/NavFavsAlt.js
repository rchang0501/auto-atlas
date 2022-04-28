import { Text, View, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { FONTS, COLORS, SIZES } from "../constants";
import { Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import { setDestination, setModalVisible } from "../slices/navSlice";

const data = [
  {
    id: "home_id",
    icon: "home",
    name: "Home",
    description: "CN Tower, Toronto, ON",
    destination: {
      location: { lat: 43.6425662, lng: -79.3870568 },
      description: "CN Tower, Front Street West, Toronto, ON, Canada",
    },
  },
  {
    id: "work_id",
    icon: "briefcase",
    name: "Work",
    description: "UWaterloo, Waterloo, ON",
    destination: {
      location: { lat: 43.4722854, lng: -80.5448576 },
      description: "University , University Avenue West, Waterloo, ON, Canada",
    },
  },
];

const NavFavsAlt = () => {
  const dispatch = useDispatch();

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            dispatch(setDestination(item.destination));
            dispatch(setModalVisible(true));
          }}
          style={{
            marginRight: SIZES.base,
            backgroundColor: COLORS.white,
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small,
            borderRadius: SIZES.extraLarge,
            elevation: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon
              name={item.icon}
              type="ionicon"
              size={SIZES.small}
              style={{ marginRight: 6 }}
            />
            <Text
              style={{
                fontFamily: FONTS.semiBold,
                fontSize: SIZES.small,
              }}
            >
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavsAlt;
