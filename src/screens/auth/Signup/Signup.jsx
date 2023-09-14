import React, { useState } from "react";
import { Text, View } from "react-native";
import Button from "../../../components/Button/Button";
import { styles } from "./signupStyles";
import AuthHeader from "../../../components/AuthHeader/AuthHeader";
import Input from "../../../components/Input/Input";
import Checkbox from "../../../components/Checkbox/Checkbox";

const Signup = () => {
    //
    const [checked, setChecked] = useState(false);

    return (
        <View style={styles.container}>
            <AuthHeader title="Sign Up" />
            <Input label="Name" placeholder="Amir F" />
            <Input label="E-mail" placeholder="example@email.com" />
            <Input isPassword label="Password" placeholder="**********" />
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked} />
                <Text style={styles.agreeText}>
                    I agree with
                    <Text style={styles.agreeTextBold}> Terms </Text>&{" "}
                    <Text style={styles.agreeTextBold}>Privacy</Text>
                </Text>
            </View>
        </View>
    );
};

export default Signup;
