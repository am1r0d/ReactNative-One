import React from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { products } from "../../../data/products";
import FavoriteItem from "../../../components/FavoriteItem/FavoriteItem";
import Header from "../../../components/Header/Header";

const MyListing = ({ navigation }) => {
    // renderItem
    const renderItem = ({ item }) => {
        const onProductPress = () => {
            navigation.navigate("ProductDetails", { product: item });
        };
        return (
            <FavoriteItem
                icon={require("../../../assets/delete.png")}
                onPress={onProductPress}
                {...item}
            />
        );
    };

    const goBack = () => navigation.goBack();

    return (
        <SafeAreaView>
            <Header title="Favorites" showBack onBackPress={goBack} />
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => String(item?.id)}
            />
        </SafeAreaView>
    );
};

export default React.memo(MyListing);
