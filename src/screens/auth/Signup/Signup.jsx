import React, { useState } from "react";
import { Text, View } from "react-native";
import Button from "../../../components/Button/Button";
import { styles } from "./signupStyles";
import AuthHeader from "../../../components/AuthHeader/AuthHeader";
import Input from "../../../components/Input/Input";
import Checkbox from "../../../components/Checkbox/Checkbox";
import Separator from "../../../components/Separator/Separator";

const Signup = () => {
    //
    const [checked, setChecked] = useState(false);

    return (
        <View style={styles.container}>
            {/* Header */}
            <AuthHeader title="Sign Up" />

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
            <Separator text="or Sing In with" />
        </View>
    );
};

export default Signup;
