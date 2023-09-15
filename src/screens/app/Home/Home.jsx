import React from "react";
import { ScrollView, Text } from "react-native";
import styles from "./StylesHome";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Text>Home</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(Home);
