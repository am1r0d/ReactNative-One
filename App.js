import * as React from "react";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Signin from "./src/screens/auth/Signin/Signin";
import Splash from "./src/screens/auth/Splash/Splash";
import Signup from "./src/screens/auth/Signup/Signup";
import { colors } from "./src/utils/colors";

const WEB_CLIENT_ID =
    "286125874361-mjcgbtn5v0p0iur07s3mvlfe9n4dqad4.apps.googleusercontent.com";
const IOS_CLIENT_ID =
    "286125874361-l0k696tlla80308vib3gbvpc1c7npov9.apps.googleusercontent.com";
const REVERSE_IOS_CLIENT_ID =
    "com.googleusercontent.apps.286125874361-l0k696tlla80308vib3gbvpc1c7npov9";

export default function App() {
    const theme = {
        colors: {
            background: colors.white,
        },
    };

    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator>
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Signin"
                    component={Signin}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Signup"
                    component={Signup}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// const styles = StyleSheet.create({
//     themeHeader: {
//         margin: 16,
//         fontSize: 16,
//     },
// });
