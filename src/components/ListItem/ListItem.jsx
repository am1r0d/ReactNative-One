import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./ListItemStyles";

const ListItem = ({ title, subtitle }) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <Image
                style={styles.arrow}
                source={require("../../assets/arrow.png")}
            />
        </View>
    );
};

export default ListItem;
