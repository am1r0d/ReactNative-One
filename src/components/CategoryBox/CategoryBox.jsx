import React from "react";
import { Image, Pressable, View, Text } from "react-native";
import { styles } from "./CategoryBoxStyles";

//
const CategoryBox = ({ title, image, onPress, isFirst }) => {
    return (
        <Pressable
            onPress={onPress}
            style={[styles.container, isFirst ? { marginLeft: 24 } : {}]}
        >
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: image }} />
            </View>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    );
};
export default React.memo(CategoryBox);
