import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Signin from "./src/screens/auth/Signin/Signin";
import Splash from "./src/screens/auth/Splash/Splash";
import Signup from "./src/screens/auth/Signup/Signup";
import { colors } from "./src/utils/colors";

// Tabs imports
import Home from "./src/screens/app/Home/Home";
import Profile from "./src/screens/app/Profile/Profile";
import Favorites from "./src/screens/app/Favorites/Favorites";
import { Image } from "react-native";

// // const WEB_CLIENT_ID =
// //     "286125874361-mjcgbtn5v0p0iur07s3mvlfe9n4dqad4.apps.googleusercontent.com";
// // const IOS_CLIENT_ID =
// //     "286125874361-l0k696tlla80308vib3gbvpc1c7npov9.apps.googleusercontent.com";
// // const REVERSE_IOS_CLIENT_ID =
// //     "com.googleusercontent.apps.286125874361-l0k696tlla80308vib3gbvpc1c7npov9";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
                let icon;

                if (route.name === "Home") {
                    icon = focused
                        ? require("./src/assets/tabs/home_active.png")
                        : require("./src/assets/tabs/home.png");
                } else if (route.name === "Profile") {
                    icon = focused
                        ? require("./src/assets/tabs/profile_active.png")
                        : require("./src/assets/tabs/profile.png");
                } else if (route.name === "Favorites") {
                    icon = focused
                        ? require("./src/assets/tabs/bookmark_active.png")
                        : require("./src/assets/tabs/bookmark.png");
                }
                // You can return any component that you like here!
                return (
                    <Image style={{ width: 24, height: 24 }} source={icon} />
                );
            },
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: { borderTopColor: colors.lightGrey },
        })}
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
);

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
