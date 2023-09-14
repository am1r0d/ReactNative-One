import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./ButtonStyles";

const Button = ({ title, onPress, style }) => {
    console.log("Inside Button");
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPress}
            style={[styles.container, style]}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

export default React.memo(Button);
