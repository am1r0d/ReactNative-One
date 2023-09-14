import { SafeAreaView, StyleSheet } from "react-native";
import Signin from "./src/screens/auth/Signin/Signin";
import { useEffect } from "react";
// import Splash from "./src/screens/auth/Splash/Splash";

const WEB_CLIENT_ID =
    "286125874361-mjcgbtn5v0p0iur07s3mvlfe9n4dqad4.apps.googleusercontent.com";
const IOS_CLIENT_ID =
    "286125874361-l0k696tlla80308vib3gbvpc1c7npov9.apps.googleusercontent.com";
const REVERSE_IOS_CLIENT_ID =
    "com.googleusercontent.apps.286125874361-l0k696tlla80308vib3gbvpc1c7npov9";

export default function App() {
    //
    useEffect(() => {}, []);
    //
    return (
        <SafeAreaView>
            {/* <Splash /> */}
            <Signin />
        </SafeAreaView>
    );
}

// const styles = StyleSheet.create({
//     themeHeader: {
//         margin: 16,
//         fontSize: 16,
//     },
// });
