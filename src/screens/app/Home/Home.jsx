import React from "react";
import { ScrollView, Text } from "react-native";
import styles from "./StylesHome";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header/Header";

const Home = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Header showSearch title="Find All You Need" />
                <Text>HOME</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(Home);
