import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Signin from "./src/screens/auth/Signin/Signin";
import Splash from "./src/screens/auth/Splash/Splash";
import Signup from "./src/screens/auth/Signup/Signup";
import { colors } from "./src/utils/colors";

// Tabs imports
import Home from "./src/screens/app/Home/Home";
import Profile from "./src/screens/app/Profile/Profile";
import Favorites from "./src/screens/app/Favorites/Favorites";

// const WEB_CLIENT_ID =
//     "286125874361-mjcgbtn5v0p0iur07s3mvlfe9n4dqad4.apps.googleusercontent.com";
// const IOS_CLIENT_ID =
//     "286125874361-l0k696tlla80308vib3gbvpc1c7npov9.apps.googleusercontent.com";
// const REVERSE_IOS_CLIENT_ID =
//     "com.googleusercontent.apps.286125874361-l0k696tlla80308vib3gbvpc1c7npov9";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>;
};

export default function App() {
    //
    // Theme Navigation
    const theme = {
        colors: {
            background: colors.white,
        },
    };

    // isSignedIn
    const isSignedIn = true;

    return (
        <SafeAreaProvider>
            <NavigationContainer theme={theme}>
                <Stack.Navigator>
                    {isSignedIn ? (
                        <>
                            <Stack.Screen
                                name="Tabs"
                                component={Tabs}
                                options={{ headerShown: false }}
                            />
                        </>
                    ) : (
                        <>
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
                        </>
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
