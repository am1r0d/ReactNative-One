import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";

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
