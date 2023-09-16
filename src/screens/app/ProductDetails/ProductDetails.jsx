import React from "react";
import { ScrollView, Text, Image, View } from "react-native";
import { styles } from "./ProductDetailsStyles";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductDetails = ({ route }) => {
    const { product } = route?.params || {};

    //
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Image style={styles.image} source={{ uri: product?.image }} />
                <View style={styles.content}>
                    <Text style={styles.title}>{product?.title}</Text>
                    <Text style={styles.price}>{product?.price}</Text>
                    <Text style={styles.description}>
                        {product?.description}
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(ProductDetails);
