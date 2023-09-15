import React from "react";
import { ScrollView, Text } from "react-native";
import styles from "./StylesProfile";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Text>New</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(Profile);
