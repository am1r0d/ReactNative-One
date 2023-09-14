import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

const Splash = () => {
    return (
        <View style={styles.container}>
            <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../../../assets/bg.png")}
            />
            <Text style={styles.title}>You'll Find</Text>
            <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
            <Text style={styles.title}>here!</Text>
        </View>
    );
};

export default Splash;
