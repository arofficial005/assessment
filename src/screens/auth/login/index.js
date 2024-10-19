import React, { useEffect, useRef, useState } from "react";
import { Image, Pressable, Switch, TouchableOpacity, View } from "react-native";
import { useForm } from "react-hook-form";

import LoginFormValidation from "./valdiation"; // Correct the import path as needed
import styles from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { height, width } from "../../../utils/dimension";
import { AppColors } from "../../../utils";
import { InputField } from "../../../components/input";
import CustomText from "../../../components/text";
import {
  AntDesign,
  Feather,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Button from "../../../components/button";
import { ScreenNames } from "../../../Routes/routes";
import ScreenWrapper from "../../../components/screen-wrapper";
import Spacer from "../../../components/spacer";
import InstagramLogin from "react-native-instagram-login";

export default function Login({ navigation }) {
  const [loading, setLoading] = useState(false);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const emailRef = useRef(null);
  const [passwordHide, setPasswordHide] = useState(true);
  const [ConfirmpasswordHide, setConfirmpasswordHide] = useState(true);
  const insRef = useRef();
  const [token, setToken] = useState(null);

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(LoginFormValidation),
  });

  const loginHandler = async (values) => {
    // navigation.navigate(ScreenNames.HOME);
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <ScreenWrapper
      statusBarColor={AppColors.transparent}
      barStyle="dark-content"
      scrollEnabled
      backgroundColor={AppColors.white}
    >
      <View style={styles.mainViewContainer}>
        <View style={styles.inputContainer}>
          <View style={{ width: "90%", alignSelf: "center" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <CustomText
                textAlign="center"
                color={AppColors.primary}
                textProps={{ fontWeight: "bold" }}
                textStyles={{ fontWeight: "bold" }}
                size={2.2}
              >
                Login
              </CustomText>
            </View>
            <CustomText
              textAlign="left"
              color={AppColors.grey_200}
              textProps={{
                fontWeight: "400",
                marginTop: height(1),
              }}
              textStyles={{ fontWeight: "400" }}
              size={1.7}
            >
              Enter your details below
            </CustomText>
          </View>
          <Spacer vertical={height(2)} />
          <InputField
            control={control}
            prefix={
              <FontAwesome6
                name="user"
                size={height(2.5)}
                style={{ marginRight: height(1) }}
                color={AppColors.black}
              />
            }
            name="username"
            keyboardType="default"
            containerStyles={{
              width: "90%",
              alignSelf: "center",
              backgroundColor: AppColors.white,
            }}
            textFieldContainer={{
              width: "100%",
              backgroundColor: AppColors.white,
              borderColor: AppColors.secondary,
              borderWidth: width(0.2),
            }}
            textFieldInnerContainer={{ width: "100%" }}
            onSubmit={() => emailRef?.current?.focus()}
            keytype="next"
            label=""
            placeholder="Enter Username"
            error={errors.username}
          />
          <InputField
            control={control}
            prefix={
              <MaterialCommunityIcons
                name="email-outline"
                size={height(2.5)}
                style={{ marginRight: height(1) }}
                color={AppColors.black}
              />
            }
            name="email"
            keyboardType="email-address"
            containerStyles={{
              width: "90%",
              alignSelf: "center",
              backgroundColor: AppColors.white,
            }}
            textFieldContainer={{
              width: "100%",
              backgroundColor: AppColors.white,
              borderColor: AppColors.secondary,
              borderWidth: width(0.2),
            }}
            textFieldInnerContainer={{ width: "100%" }}
            onSubmit={() => passwordRef?.current?.focus()}
            keytype="next"
            label=""
            placeholder="Enter email"
            error={errors.email}
          />
          <InputField
            ref={passwordRef}
            prefix={
              <FontAwesome6
                name={"lock"}
                size={height(2)}
                style={{ marginRight: height(1) }}
                color={AppColors.black}
              />
            }
            containerStyles={{ width: "90%", alignSelf: "center" }}
            textFieldContainer={{
              width: "100%",
              backgroundColor: AppColors.white,
              borderColor: AppColors.secondary,
              borderWidth: width(0.2),
            }}
            textFieldInnerContainer={{ width: "100%" }}
            label=""
            control={control}
            onSubmit={() => confirmPasswordRef?.current?.focus()}
            name="password"
            placeholder="Enter Password"
            error={errors.password}
            secureTextEntry={passwordHide}
            suffix={
              <>
                <TouchableOpacity
                  onPress={() => {
                    setPasswordHide(!passwordHide);
                  }}
                >
                  <Feather
                    name={passwordHide ? "eye-off" : "eye"}
                    color={AppColors.secondary}
                    size={height(2)}
                  />
                </TouchableOpacity>
              </>
            }
          />
          <InputField
            ref={confirmPasswordRef}
            prefix={
              <FontAwesome6
                name={"lock"}
                size={height(2)}
                style={{ marginRight: height(1) }}
                color={AppColors.black}
              />
            }
            containerStyles={{ width: "90%", alignSelf: "center" }}
            textFieldContainer={{
              width: "100%",
              backgroundColor: AppColors.white,
              borderColor: AppColors.secondary,
              borderWidth: width(0.2),
            }}
            textFieldInnerContainer={{ width: "100%" }}
            label=""
            secureTextEntry={ConfirmpasswordHide}
            suffix={
              <TouchableOpacity
                onPress={() => {
                  setConfirmpasswordHide(!ConfirmpasswordHide);
                }}
              >
                <Feather
                  name={ConfirmpasswordHide ? "eye-off" : "eye"}
                  color={AppColors.secondary}
                  size={height(2)}
                />
              </TouchableOpacity>
            }
            control={control}
            name="confirmPassword"
            placeholder="Enter Confirm Password"
            error={errors.confirmPassword}
          />
          <View
            style={{
              width: "95%",
            }}
          >
            <CustomText
              color={AppColors.pink}
              textAlign="right"
              size={1.7}
              textProps={{
                fontWeight: "bold",
              }}
              textStyles={{ fontWeight: "bold" }}
            >
              Forgot Password!
            </CustomText>
          </View>

          <Spacer vertical={height(3)} />
          <Button
            disabled={!isValid}
            loading={loading}
            textStyle={{ fontWeight: "bold" }}
            containerStyle={styles.button}
            onPress={handleSubmit(loginHandler)}
          >
            Register
          </Button>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <CustomText
            color={AppColors.black}
            textStyles={{ fontWeight: "400" }}
            size={1.5}
            textAlign="center"
          >
            Already have an Account?
          </CustomText>
          <CustomText
            color={AppColors.primary}
            textStyles={{
              marginLeft: height(0.5),
              fontWeight: "bold",
            }}
            textDecorationLine="underline"
            size={2}
            textAlign="center"
          >
            Log in
          </CustomText>
        </View>
        <CustomText
          color={AppColors.black}
          textStyles={{
            fontWeight: "400",
            marginTop: height(1),
          }}
          size={1.6}
          textAlign="center"
        >
          Continue with
        </CustomText>
        <Pressable
          onPress={() => insRef.current.show()}
          style={{ marginTop: height(2) }}
        >
          <AntDesign
            name="instagram"
            size={height(5)}
            color={AppColors.primary}
          />
        </Pressable>
        <InstagramLogin
          ref={insRef}
          appId="546176184668569" // Refer Section 2
          appSecret="94dbcfa846075a5e95c0d083d87709ff" // Refer Section 2
          redirectUrl="https://expo.dev/accounts/samiullah002" // Refer Section 2
          scopes={["user_profile", "user_media"]}
          onLoginSuccess={async (token) => {
            console.log("Login successful:", token); // Log the entire token object for debugging
            setToken(token); // Set only the access_token in state
            const res = await fetch(
              `https://graph.instagram.com/${token?.user_id}?fields=id,username&access_token=${token?.access_token}`
            );
            const data = await res.json();
            console.log("data", data);
            navigation.navigate(ScreenNames.HOME, { data: data });
          }}
          onLoginFailure={(data) => console.log(data)}
        />
      </View>
    </ScreenWrapper>
  );
}
