import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./GoogleLoginStyles";

const GoogleLogin = () => {
    return (
        <TouchableOpacity activeOpacity={0.6} style={styles.container}>
            <Image
                style={styles.image}
                source={require("../../assets/google.png")}
            />
        </TouchableOpacity>
    );
};

export default React.memo(GoogleLogin);
