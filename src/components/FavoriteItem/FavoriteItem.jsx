import React from "react";
import { Image, Pressable, View, Text } from "react-native";
import { styles } from "./FavoriteItemStyles";

//
const FavoriteItem = ({ title, price, image, onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{ uri: image }} />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
            <Image
                source={require("../../assets/close.png")}
                style={styles.icon}
            />
        </Pressable>
    );
};
export default React.memo(FavoriteItem);
