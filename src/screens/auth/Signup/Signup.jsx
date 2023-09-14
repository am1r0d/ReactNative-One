import React, { useState } from "react";
import { Text, View, ScrollView, SafeAreaView } from "react-native";
import Button from "../../../components/Button/Button";
import { styles } from "./signupStyles";
import AuthHeader from "../../../components/AuthHeader/AuthHeader";
import Input from "../../../components/Input/Input";
import Checkbox from "../../../components/Checkbox/Checkbox";
import Separator from "../../../components/Separator/Separator";
import GoogleLogin from "../../../components/GoogleLogin/GoogleLogin";

const Signup = ({ navigation }) => {
    //
    const [checked, setChecked] = useState(false);

    // Back
    const onBack = () => {
        navigation.goBack();
    };

    //
    const onSignIn = () => {
        console.log("Footer Text");
        navigation.navigate("Signin");
    };

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                {/* Header */}
                <AuthHeader onBackPress={onBack} title="Sign Up" />

                {/* Inputs */}
                <Input label="Name" placeholder="Amir F" />
                <Input label="E-mail" placeholder="example@email.com" />
                <Input isPassword label="Password" placeholder="**********" />

                {/*  Checkbox*/}
                <View style={styles.agreeRow}>
                    <Checkbox checked={checked} onCheck={setChecked} />
                    <Text style={styles.agreeText}>
                        I agree with
                        <Text style={styles.agreeTextBold}> Terms </Text>&{" "}
                        <Text style={styles.agreeTextBold}>Privacy</Text>
                    </Text>
                </View>

                {/* Button */}
                <Button style={styles.button} title="Sign Up" />

                {/* Separator */}
                <Separator text="Or sign up with" />

                {/* Google */}
                <GoogleLogin />

                {/* Footer */}
                <Text style={styles.footerText}>
                    Already have an account?
                    <Text onPress={onSignIn} style={styles.footerLink}>
                        Sign In
                    </Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Signup;
