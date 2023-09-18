import React, { useState } from "react";
import { Text, View, ScrollView, SafeAreaView, Alert } from "react-native";
import Button from "../../../components/Button/Button";
import { styles } from "./signupStyles";
import AuthHeader from "../../../components/AuthHeader/AuthHeader";
import Input from "../../../components/Input/Input";
import Checkbox from "../../../components/Checkbox/Checkbox";
import Separator from "../../../components/Separator/Separator";
import GoogleLogin from "../../../components/GoogleLogin/GoogleLogin";
import { request } from "../../../utils/request";

const Signup = ({ navigation }) => {
    //
    const [checked, setChecked] = useState(false);
    const [values, setValues] = useState({});

    // Back
    const onBack = () => {
        navigation.goBack();
    };

    //
    const onSignIn = () => {
        console.log("Footer Text");
        navigation.navigate("Signin");
    };

    const onChange = (key, value) => {
        setValues((v) => ({ ...v, [key]: value }));
    };

    const onSubmit = async () => {
        try {
            if (
                !values?.fullName ||
                !values?.email ||
                !values?.password ||
                !values?.confirmPassword
            ) {
                Alert.alert("all fields are required");
                return;
                // console.log("Hello");
            }
            if (values?.password !== values?.confirmPassword) {
                Alert.alert("Passwords do not match");
                return;
            }
            if (!checked) {
                Alert.alert("Please agree to the terms");
                return;
            }
            const response = await request({
                url: "/user/register",
                method: "post",
                data: values,
            });
            console.log("Response: " + response);
        } catch (error) {
            console.log("Error ==>", error);
        }
    };
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                {/* Header */}
                <AuthHeader onBackPress={onBack} title="Sign Up" />

                {/* Inputs */}
                <Input
                    value={values.fullName}
                    onChangeText={(v) => onChange("fullName", v)}
                    label="Name"
                    placeholder="Amir F"
                />
                <Input
                    value={values.email}
                    onChangeText={(v) => onChange("email", v)}
                    label="E-mail"
                    placeholder="example@email.com"
                />
                <Input
                    value={values.password}
                    onChangeText={(v) => onChange("password", v)}
                    isPassword
                    label="Password"
                    placeholder="**********"
                />
                <Input
                    value={values.confirmPassword}
                    onChangeText={(v) => onChange("confirmPassword", v)}
                    isPassword
                    label="confirmPassword"
                    placeholder="**********"
                />

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
                <Button
                    onPress={onSubmit}
                    style={styles.button}
                    title="Sign Up"
                />

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
