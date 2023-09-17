import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, Image, View } from "react-native";
import { styles } from "./CreateListingStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header/Header";
import { launchImageLibrary } from "react-native-image-picker";
// ImagePicker
import * as ImagePicker from "expo-image-picker";

const CreateListing = ({ navigation }) => {
    const [images, setImages] = useState([]);
    const goBack = () => {
        navigation.goBack();
    };

    // Upload image
    const uploadNewImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });
        if (result?.assets?.length) {
            setImages((list) => [...list, ...result?.assets]);
        }
        if (!result.canceled) {
            console.log(result);
        } else {
            alert("you did not select any image");
        }
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
                        style={styles.uploadContainer}
                        onPress={uploadNewImage}
                    >
                        <View style={styles.uploadCircle}>
                            <Text style={styles.uploadPlus}>+</Text>
                        </View>
                    </TouchableOpacity>

                    {images?.map((image) => (
                        <Image
                            key={image?.filename}
                            style={styles.image}
                            source={{ uri: image?.uri }}
                        />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(CreateListing);
