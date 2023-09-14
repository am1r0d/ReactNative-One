import { SafeAreaView, StyleSheet } from "react-native";
import Signin from "./src/screens/auth/Signin/Signin";
// import Splash from "./src/screens/auth/Splash/Splash";

export default function App() {
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
