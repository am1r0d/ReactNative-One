import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import Button from "../../../components/Button/Button";
import { styles } from "./styles";

const Splash = ({ navigation }) => {
    //
    console.log("navigation =>", navigation);

    // Goto to Signup Page
    const onSignup = () => {
        navigation.navigate("Signup");
    };

    // Goto to Signin Page
    const onSignin = () => {
        navigation.navigate("Signin");
    };
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

            <View style={styles.buttonCont}>
                <Button title="Sign Up" onPress={onSignup} />
            </View>

            <Pressable onPress={onSignin} hitSlop={20}>
                <Text style={styles.footerText}>Sign In</Text>
            </Pressable>
        </View>
    );
};

export default Splash;
