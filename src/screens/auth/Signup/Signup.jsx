import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import Button from "../../../components/Button/Button";
import { styles } from "./signupStyles";
import AuthHeader from "../../../components/AuthHeader/AuthHeader";
import Input from "../../../components/Input/Input";

const Signup = () => {
    return (
        <View style={styles.container}>
            <AuthHeader title="Sign Up" />
            <Input label="Name" placeholder="Amir F" />
            <Input label="E-mail" placeholder="example@email.com" />
            <Input label="Password" placeholder="**********" />
        </View>
    );
};

export default Signup;
