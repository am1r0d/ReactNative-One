import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { styles } from "./StylesHome";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header/Header";
import { categories } from "../../../data/categories";
import { products } from "../../../data/products";
import CategoryBox from "../../../components/CategoryBox/CategoryBox";
import ProductHomeItem from "../../../components/ProductHomeItem/ProductHomeItem";

const Home = () => {
    //
    const [selectedCategory, setSelectedCategory] = useState();
    const [filteredProducts, setFilteredProducts] = useState(products);

    // this useEffect for check selected category.
    useEffect(() => {
        if (selectedCategory) {
            const updatedProducts = products.filter(
                (products) => products?.category === selectedCategory
            );
            setFilteredProducts(updatedProducts);
        } else {
            setFilteredProducts(products);
        }
    }, [selectedCategory]);

    //renderCategoryItem
    const renderCategoryItem = ({ item, index }) => {
        console.log("item :::", item);
        return (
            <CategoryBox
                onPress={() => setSelectedCategory(item?.id)}
                isSelected={item?.id === selectedCategory}
                isFirst={index === 0}
                title={item?.title}
                image={item?.image}
            />
        );

        // return <Text>{item?.title}</Text>;
    };

    // ProductItem
    const renderProductItem = ({ item }) => {
        return <ProductHomeItem {...item} />;
    };

    return (
        <SafeAreaView>
            {/* <ScrollView style={styles.container}> */}
            <Header showSearch title="Find All You Need" />
            {/* <Text>HOME</Text> */}

            <FlatList
                showsHorizontalScrollIndicator={false}
                style={styles.list}
                horizontal
                data={categories}
                renderItem={renderCategoryItem}
                keyExtractor={(item, index) => String(index)}
            />
            <FlatList
                style={styles.productsList}
                numColumns={2}
                data={filteredProducts}
                renderItem={renderProductItem}
                keyExtractor={(item) => String(item.id)}
                ListFooterComponent={<View style={{ height: 200 }} />}
            />
            {/* </ScrollView> */}
        </SafeAreaView>
    );
};

export default React.memo(Home);
