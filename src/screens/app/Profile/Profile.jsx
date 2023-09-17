import React from "react";
import { Text, View } from "react-native";
import { styles } from "./StylesProfile";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header/Header";
import ListItem from "../../../components/ListItem/ListItem";
import Button from "../../../components/Button/Button";

const Profile = () => {
    //
    const onLogout = () => {
        console.log("log out clicked");
    };

    //
    const num = 10;

    //
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title="Profile" showLogout onLogout={onLogout} />
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.name}>User name</Text>
                    <Text style={styles.email}>User email</Text>
                    <ListItem
                        title="My Listings"
                        subtitle={`You have ${num} listings`}
                    />
                    <ListItem
                        title="Settings"
                        subtitle="Account, FAQ, Contact"
                    />
                </View>

                <Button style={{ flex: 0 }} title="Add new listing" />
            </View>
        </SafeAreaView>
    );
};

export default React.memo(Profile);
