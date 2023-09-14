import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./ButtonStyles";

const Button = ({ title, onPress }) => {
    //
    // const handlePress = () => {
    //     console.log("button Clicked!!!");
    // };

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPress}
            style={styles.container}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;
