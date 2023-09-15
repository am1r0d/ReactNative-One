import React, { useState } from "react";
import { Image, Pressable, View, Text } from "react-native";
import { styles } from "./HeaderStyles";
import Input from "../Input/Input";
const Header = ({
    title,
    onBackPress,
    onLogout,
    showLogout,
    showSearch,
    showBack,
}) => {
    //useState
    const [showSearchInput, setShowSearchInput] = useState(false);

    const onSearchClick = () => {
        setShowSearchInput((s) => !s);
    };
    return (
        <View>
            <View style={styles.container}>
                {/* showBack */}
                {showBack ? (
                    <Pressable hitSlop={20} onPress={onBackPress}>
                        <Image
                            style={styles.icon}
                            source={require("../../assets/back.png")}
                        />
                    </Pressable>
                ) : showSearch ? (
                    <Pressable hitSlop={20} onPress={onSearchClick}>
                        <Image
                            style={styles.icon}
                            source={require("../../assets/search.png")}
                        />
                    </Pressable>
                ) : (
                    <View style={styles.space} />
                )}
                <Text style={styles.title}>{title}</Text>

                {showLogout ? (
                    <Pressable hitSlop={20} onPress={onLogout}>
                        <Image
                            style={styles.icon}
                            source={require("../../assets/logout.png")}
                        />
                    </Pressable>
                ) : (
                    <View style={styles.space} />
                )}
            </View>
            {showSearchInput ? (
                <Input placeholder="Type your keywords..." />
            ) : null}
        </View>
    );
};
export default React.memo(Header);
