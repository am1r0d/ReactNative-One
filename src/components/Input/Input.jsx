import React, { useState } from "react";
import { Pressable, Text, TextInput, View, Image } from "react-native";
import { styles } from "./InputStyles";

const Input = ({
    label,
    // placeholder,
    isPassword,
    value,
    onChangeText,
    style,
    ...props
}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={isPassword && !isPasswordVisible}
                    // placeholder={placeholder}
                    style={[styles.input, style]}
                    {...props}
                />
                {isPassword ? (
                    <Pressable onPress={onEyePress}>
                        <Image
                            style={styles.eye}
                            source={
                                isPasswordVisible
                                    ? require("../../assets/eye.png")
                                    : require("../../assets/eye_close.png")
                            }
                        />
                    </Pressable>
                ) : null}
            </View>
        </View>
    );
};

export default Input;
