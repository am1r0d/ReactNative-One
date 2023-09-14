import { SafeAreaView, StyleSheet } from "react-native";
import Splash from "./src/screens/auth/Splash/Splash";

export default function App() {
    return (
        <SafeAreaView style={styles.themeHeader}>
            <Splash />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    themeHeader: {
        margin: 16,
        fontSize: 16,
    },
});
