import React from "react";
import { Image, Pressable, View, Text } from "react-native";
import { styles } from "./AuthHeaderStyles";

const AuthHeader = ({ title, onBackPress }) => {
    return (
        <View style={styles.container}>
            <Pressable hitSlop={20} onPress={onBackPress}>
                <Image
                    style={styles.image}
                    source={require("../../../assets/back.png")}
                />
            </Pressable>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};
export default AuthHeader;
