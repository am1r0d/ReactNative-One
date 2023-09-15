import React from "react";
import { TouchableOpacity, Image, View } from "react-native";
import { styles } from "./CheckboxStyles";

const Checkbox = ({ checked, onCheck }) => {
    console.log("Inside Checkbox[", checked, "]");
    return (
        <TouchableOpacity
            onPress={() => onCheck(!checked)}
            activeOpacity={0.6}
            style={styles.container}
        >
            {checked ? (
                <View style={styles.innerContainer}>
                    <Image
                        style={styles.checkIcon}
                        source={require("../../assets/check.png")}
                    />
                </View>
            ) : null}
        </TouchableOpacity>
    );
};

export default React.memo(Checkbox);
