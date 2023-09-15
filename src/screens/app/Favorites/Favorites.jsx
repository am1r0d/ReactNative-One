import React from "react";
import { ScrollView, Text } from "react-native";
import styles from "./StylesFavorites";
import { SafeAreaView } from "react-native-safe-area-context";

const Favorites = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Text>Favorites</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(Favorites);
