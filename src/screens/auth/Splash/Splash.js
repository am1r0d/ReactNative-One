import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import Button from "../../../components/Button/Button";
import { styles } from "./styles";

const Splash = () => {
    return (
        <View style={styles.container}>
            <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../../../assets/bg.png")}
            />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>You'll Find</Text>
                <Text style={[styles.title, styles.innerTitle]}>
                    All you need
                </Text>
                <Text style={styles.title}>here!</Text>
            </View>

            <Button title="Sign Up" />
            <Pressable hitSlop={20}>
                <Text style={styles.footerText}>Sign In</Text>
            </Pressable>
        </View>
    );
};

export default Splash;
