import React from "react";

import ScreenWrapper from "../../../components/screen-wrapper";

import { AppColors } from "../../../utils";
import { Pressable, View } from "react-native";
import CustomText from "../../../components/text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { height, width } from "../../../utils/dimension";

const RCTNetworking =
  require("react-native/Libraries/Network/RCTNetworking").default;

export default function HomeScreen({ navigation, route }) {
  const { data } = route.params;
  const onClear = () => {
    // CookieManager.clearAll(true).then((res) => {

    // });
    RCTNetworking?.clearCookies((result) => {
      console.log(result); //true if successfully cleared
      navigation.navigate("Login");
    });

    // setToken(null); // Clear the token and reset state
    // console.log("Logged out successfully"); // Log for debugging
  };
  return (
    <ScreenWrapper
      backgroundColor={AppColors.white}
      statusBarColor={AppColors.white}
      barStyle="dark-content"
    >
      <View style={{ paddingHorizontal: width(5) }}>
        <Pressable
          style={{ alignItems: "flex-end" }}
          onPress={() => {
            onClear();
          }}
        >
          <MaterialCommunityIcons
            name="logout"
            size={height(3)}
            color={AppColors.black}
          />
        </Pressable>
        <CustomText
          textAlign="center"
          color={AppColors.primary}
          textProps={{ fontWeight: "bold" }}
          textStyles={{ fontWeight: "bold", marginTop: height(5) }}
          size={2.2}
        >
          Username:{data?.username}
        </CustomText>
      </View>
    </ScreenWrapper>
  );
}
