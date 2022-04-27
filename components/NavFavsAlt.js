import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FONTS, COLORS, SIZES } from "../constants";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: "home_id",
    icon: "home",
    name: "Home",
    description: "CN Tower, Toronto, ON",
    destination: {
      location: { lat: 43.6425657, lng: -79.38705569999999 },
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
  return (
    <View style={{ justifyContent: "space-between" }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              tw`flex-row mr-4`,
              {
                flex: "row",
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: SIZES.small,
                backgroundColor: COLORS.gray,
                borderRadius: SIZES.xxl,
              },
            ]}
          >
            <Icon
              style={{ paddingVertical: SIZES.small, paddingEnd: 8 }}
              name={item.icon}
              type="ionicon"
              color="white"
              size={SIZES.font}
            />
            <View>
              <Text
                style={{
                  color: COLORS.white,
                  fontFamily: FONTS.semiBold,
                  fontSize: SIZES.font,
                }}
              >
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NavFavsAlt;

const styles = StyleSheet.create({});
