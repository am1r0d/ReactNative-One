import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    item: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginVertical: 8,
    },
    sectionTitle: {
        fontWeight: "500",
        fontSize: 16,
        color: colors.grey,
        marginBottom: 16,
    },
});
