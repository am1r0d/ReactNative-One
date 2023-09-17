import React from "react";
import { Linking, ScrollView, Text, View } from "react-native";
import { styles } from "./StylesSettings";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header/Header";
import ListItem from "../../../components/ListItem/ListItem";

const Settings = () => {
    //
    const onItemPress = () => {
        Linking.openURL("https://github.com/am1r0d");
    };

    //
    return (
        <SafeAreaView>
            <Header title="Settings" showLogout />
            <ScrollView style={styles.container}>
                <Text style={styles.sectionTitle}>Help Center</Text>
                <ListItem
                    onPress={onItemPress}
                    style={styles.item}
                    title="FAQ"
                />
                <ListItem
                    onPress={onItemPress}
                    style={styles.item}
                    title="Contact Us"
                />
                <ListItem
                    onPress={onItemPress}
                    style={styles.item}
                    title="Privacy & Terms"
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(Settings);
