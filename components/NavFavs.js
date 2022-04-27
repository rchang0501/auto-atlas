import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { assets, FONTS, COLORS, SIZES } from "../constants";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "123",
    icon: "home",
    name: "Home",
    description: "CN Tower, Toronto, ON",
    destination: {
      location: { lat: 43.6425662, lng: -79.3870568 },
      description: "CN Tower, Front Street West, Toronto, ON, Canada",
    },
  },
  {
    id: "456",
    icon: "briefcase",
    name: "Work",
    description: "University of Waterloo, Waterloo, ON",
    destination: {
      location: { lat: 43.4722854, lng: -80.5448576 },
      description:
        "University of Waterloo, University Avenue West, Waterloo, ON, Canada",
    },
  },
];

const NavFavs = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={{ paddingHorizontal: 30 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              dispatch(setOrigin(item.destination));
              dispatch(setDestination(null));
              navigation.navigate("Maps");
            }}
            style={tw`flex-row items-center p-3`}
          >
            <View
              style={{
                backgroundColor: COLORS.gray,
                padding: SIZES.font,
                marginEnd: SIZES.medium,
                borderRadius: SIZES.xxl,
              }}
            >
              <Icon
                name={item.icon}
                type="ionicon"
                color="white"
                size={SIZES.medium}
              />
            </View>
            <View>
              <Text
                style={{
                  color: COLORS.white,
                  fontFamily: FONTS.semiBold,
                  fontSize: SIZES.medium,
                }}
              >
                {item.name}
              </Text>
              <Text style={{ color: COLORS.white, fontFamily: FONTS.regular }}>
                {item.description}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NavFavs;

const styles = StyleSheet.create({});
