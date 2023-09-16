import React from "react";
import { FlatList, View, Text } from "react-native";
import { styles } from "./StylesFavorites";
import { SafeAreaView } from "react-native-safe-area-context";
import { products } from "../../../data/products";
import FavoriteItem from "../../../components/FavoriteItem/FavoriteItem";
import Header from "../../../components/Header/Header";

const Favorites = ({ navigation }) => {
    // renderItem
    const renderItem = ({ item }) => {
        const onProductPress = () => {
            navigation.navigate("ProductDetails", { product: item });
        };
        return <FavoriteItem onPress={onProductPress} {...item} />;
    };

    return (
        <SafeAreaView>
            <Header title="Favorites" />
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => String(item?.id)}
            />
        </SafeAreaView>
    );
};

export default React.memo(Favorites);
