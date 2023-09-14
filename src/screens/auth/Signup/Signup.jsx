import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import Button from "../../../components/Button/Button";
import { styles } from "./signupStyles";
import AuthHeader from "../../../components/AuthHeader/AuthHeader";

const Signup = () => {
    return (
        <View style={styles.container}>
            <AuthHeader title="Sign Up" />
        </View>
    );
};

export default Signup;
