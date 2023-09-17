import React from "react";
import { View, Text, Image, Pressable, TextInput } from "react-native";
import { styles } from "./EditableBoxStyles";

const EditableBox = ({ label, value, onChangeText, editable, style }) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.subtitle}>{label}</Text>
            <TextInput
                editable={editable}
                value={value}
                onChangeText={onChangeText}
                style={styles.input}
            />
        </View>
    );
};

export default React.memo(EditableBox);
