import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    sectionTitle: {
        fontWeight: "500",
        fontSize: 14,
        color: colors.blue,
        marginBottom: 16,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    uploadContainer: {
        width: 100,
        height: 100,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.grey,
        borderStyle: "dotted",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 8,
        marginTop: 8,
    },
    uploadCircle: {
        width: 32,
        height: 32,
        borderRadius: 20,
        backgroundColor: colors.grey,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    uploadPlus: {
        color: colors.white,
        fontSize: 24,
        marginTop: -2,
    },
    imageRow: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    delete: { width: 24, height: 24, marginLeft: -16, marginTop: -10 },
    imageContent: { flexDirection: "row", marginTop: 8, marginRight: 16 },
    textarea: {
        minHeight: 150,
        paddingTop: 16,
    },
});
