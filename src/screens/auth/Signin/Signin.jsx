import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import Button from "../../../components/Button/Button";
import { styles } from "./signinStyles";
import AuthHeader from "../../../components/AuthHeader/AuthHeader";
import Input from "../../../components/Input/Input";
import Separator from "../../../components/Separator/Separator";
import GoogleLogin from "../../../components/GoogleLogin/GoogleLogin";

const Signin = ({ navigation }) => {
    //
    const onSignUp = () => {
        navigation.navigate("Signup");
    };

    // Back
    const onBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                {/* Header */}
                <AuthHeader onBackPress={onBack} title="Sign In" />

                {/* Inputs */}
                <Input label="E-mail" placeholder="example@email.com" />
                <Input isPassword label="Password" placeholder="**********" />

                {/* Button */}
                <Button style={styles.button} title="Sign In" />

                {/* Separator */}
                <Separator text="Or sign in with" />

                {/* Google */}
                <GoogleLogin />

                {/* Footer */}
                <Text style={styles.footerText}>
                    Don't have an account?
                    <Text onPress={onSignUp} style={styles.footerLink}>
                        Sign In
                    </Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(Signin);
