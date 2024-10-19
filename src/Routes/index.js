import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenNames } from "./routes";
import Login from "../screens/auth/login";
import HomeScreen from "../screens/app/home";

export const navigationRef = React.createRef();
const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {/* {!isLogin ? <AuthStackNavigator /> : <AppNavigator />} */}
      <Stack.Navigator
        initialRouteName={ScreenNames.LOGIN}
        screenOptions={{ header: () => false }}
      >
        <Stack.Screen name={ScreenNames.LOGIN} component={Login} />
        <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
