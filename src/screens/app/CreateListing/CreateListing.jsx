import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./CreateListingStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header/Header";

const CreateListing = ({ navigation }) => {
    //
    const goBack = () => {
        navigation.goBack();
    };

    //
    return (
        <SafeAreaView>
            <Header
                showBack={true}
                onBackPress={goBack}
                title="Create a new listings"
            />
            <ScrollView style={styles.container}>
                <Text style={styles.sectionTitle}>Upload Photos</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(CreateListing);
