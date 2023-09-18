import React, { useState } from "react";
import {
    ScrollView,
    Text,
    TouchableOpacity,
    Image,
    View,
    Pressable,
    ActivityIndicator,
} from "react-native";
import { styles } from "./CreateListingStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header/Header";

// ImagePicker
import * as ImagePicker from "expo-image-picker";
import Input from "../../../components/Input/Input";

const CreateListing = ({ navigation }) => {
    const [images, setImages] = useState([]);
    const [values, setValues] = useState({});
    const [loading, setLoading] = useState(false);

    const goBack = () => {
        navigation.goBack();
    };

    // Upload image
    const uploadNewImage = async () => {
        setLoading(true);
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });
        if (result?.assets?.length) {
            setImages((list) => [...list, ...result?.assets]);
            setLoading(false);
        }
        if (!result.canceled) {
            console.log(result);
        } else {
            alert("you did not select any image");
        }
    };

    //
    const onDeleteImage = (image) => {
        setImages((list) => {
            const filteredImages = list.filter(
                (img) => img?.fileName !== image?.fileName
            );
            return filteredImages;
        });
    };

    //
    const onChange = (value, key) => {
        setValues((val) => [{ ...val, [key]: value }]);
    };

    //
    return (
        <SafeAreaView>
            <Header
                showBack={true}
                onBackPress={goBack}
                title="Create a new listings"
            />
            <ScrollView style={styles.container}>
                <Text style={styles.sectionTitle}>Upload Photos</Text>
                <View style={styles.imageRow}>
                    <TouchableOpacity
                        disabled={loading}
                        style={styles.uploadContainer}
                        onPress={uploadNewImage}
                    >
                        <View style={styles.uploadCircle}>
                            <Text style={styles.uploadPlus}>+</Text>
                        </View>
                    </TouchableOpacity>

                    {images?.map((image) => (
                        <View style={styles.imageContent} key={image?.filename}>
                            <Image
                                style={styles.image}
                                source={{ uri: image?.uri }}
                            />
                            <Pressable
                                hitSlop={20}
                                onPress={() => onDeleteImage(image)}
                            >
                                <Image
                                    style={styles.delete}
                                    source={require("../../../assets/close.png")}
                                />
                            </Pressable>
                        </View>
                    ))}
                    {loading ? <ActivityIndicator /> : null}
                </View>

                <Input
                    placeholder="Listing Title"
                    label="Title"
                    value={values.title}
                    onChangeText={(v) => onChange(v, "title")}
                />
                <Input
                    placeholder="Enter price in USD"
                    label="Price"
                    value={values.price}
                    onChangeText={(v) => onChange(v, "price")}
                    keyboardType="numeric"
                />
                <Input
                    style={styles.textarea}
                    placeholder="Tell us more"
                    label="Description"
                    value={values.description}
                    onChangeText={(v) => onChange(v, "description")}
                    multiline={true}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(CreateListing);
