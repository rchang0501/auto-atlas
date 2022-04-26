import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

import { COLORS, navCardData, FONTS, SIZES, SHADOWS } from "../constants";
import { Icon } from "react-native-elements";

const NavCard = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={navCardData}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              tw`p-2 pl-6 pb-8 pt-4 m-2 w-40 bg-gray-300`,
              { borderRadius: SIZES.font },
            ]}
          >
            <View>
              <Image
                style={{ width: 120, height: 120, resizeMode: "contain" }}
                source={item.image}
              />
              <Text style={[tw`mt-2`, { fontFamily: FONTS.semiBold }]}>
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NavCard;
