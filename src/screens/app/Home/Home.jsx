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
    const [keyword, setKeyword] = useState();
    const [filteredProducts, setFilteredProducts] = useState(products);

    // this useEffect for check selected category.
    // and filter by typing keywords
    useEffect(() => {
        if (selectedCategory && !keyword) {
            const updatedProducts = products.filter(
                (product) => product?.category === selectedCategory
            );
            setFilteredProducts(updatedProducts);
        }
        //
        else if (selectedCategory && keyword) {
            const updatedProducts = products.filter(
                (product) =>
                    product?.category === selectedCategory &&
                    product?.title
                        ?.toLowerCase()
                        .includes(keyword?.toLowerCase())
            );
            setFilteredProducts(updatedProducts);
        }
        //
        else if (!selectedCategory && keyword) {
            const updatedProducts = products.filter((product) =>
                product?.title?.toLowerCase().includes(keyword?.toLowerCase())
            );
            setFilteredProducts(updatedProducts);
        }
        //
        else if (!keyword && !selectedCategory) {
            setFilteredProducts(products);
        }
    }, [selectedCategory, keyword]);

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
    };

    // ProductItem
    const renderProductItem = ({ item }) => {
        return <ProductHomeItem {...item} />;
    };

    return (
        <SafeAreaView>
            {/* <ScrollView style={styles.container}> */}
            <Header
                showSearch
                onSearch={setKeyword}
                keyword={keyword}
                title="Find All You Need"
            />

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
