import React from "react";
import { ScrollView, Text, Image, View, Pressable } from "react-native";
import { styles } from "./ProductDetailsStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../components/Button/Button";

const ProductDetails = ({ route, navigation }) => {
    const { product } = route?.params || {};

    const onBackPress = () => {
        navigation.goBack();
    };
    //
    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.container}>
                <Image style={styles.image} source={{ uri: product?.image }} />
                <View style={styles.content}>
                    <Text style={styles.title}>{product?.title}</Text>
                    <Text style={styles.price}>{product?.price}</Text>
                    <Text style={styles.description}>
                        {product?.description}
                    </Text>
                </View>

                <Pressable onPress={onBackPress} style={styles.backContainer}>
                    <Image
                        style={styles.backIcon}
                        source={require("../../../assets/new-back.png")}
                    />
                </Pressable>
            </ScrollView>

            <View style={styles.footer}>
                <Pressable style={styles.bookmarkContainer}>
                    <Image
                        style={styles.bookmarkIcon}
                        source={require("../../../assets/bookmark_blue.png")}
                    />
                </Pressable>
                <Button title="Contact Seller" />
            </View>
        </SafeAreaView>
    );
};

export default React.memo(ProductDetails);
