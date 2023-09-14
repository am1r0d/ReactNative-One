import { SafeAreaView, StyleSheet } from "react-native";
// import Splash from "./src/screens/auth/Splash/Splash";
import Signup from "./src/screens/auth/Signup/Signup";

export default function App() {
    return (
        <SafeAreaView>
            {/* <Splash /> */}
            <Signup />
        </SafeAreaView>
    );
}

// const styles = StyleSheet.create({
//     themeHeader: {
//         margin: 16,
//         fontSize: 16,
//     },
// });
