import React from "react";
import { FlatList, ScrollView, Text } from "react-native";
import { styles } from "./StylesHome";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header/Header";
import { categories } from "../../../data/categories";
import CategoryBox from "../../../components/CategoryBox/CategoryBox";

const Home = () => {
    //
    const renderCategoryItem = ({ item, index }) => {
        console.log("item :::", item);
        return <CategoryBox title={item?.title} image={item?.image} />;

        // return <Text>{item?.title}</Text>;
    };

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Header showSearch title="Find All You Need" />
                <Text>HOME</Text>

                <FlatList
                    showsHorizontalScrollIndicator={false}
                    style={styles.list}
                    horizontal
                    data={categories}
                    renderItem={renderCategoryItem}
                    keyExtractor={(item, index) => String(index)}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(Home);
