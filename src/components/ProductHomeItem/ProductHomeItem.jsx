import React from "react";
import { Image, Pressable, View, Text } from "react-native";
import { styles } from "./ProductHomeItemStyles";

//
const ProductHomeItem = ({ title, price, image, onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{ uri: image }} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
        </Pressable>
    );
};
export default React.memo(ProductHomeItem);
